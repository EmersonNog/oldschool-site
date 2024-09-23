// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import { db } from "../../firebaseConfig";
// import {
//   collection,
//   getDocs,
//   onSnapshot,
//   query,
//   where,
//   addDoc,
// } from "firebase/firestore";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// import "./Uan.css";
// import Navbar from "../../Components/NavBar/NavBar";
// import Footer from "../../Components/Footer/Footer";

// ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

// function Uan() {
//   const [groups, setGroups] = useState([]);
//   const [candidates, setCandidates] = useState([]);
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [voteData, setVoteData] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "familias"));
//         setGroups(
//           querySnapshot.docs.map((doc) => ({
//             value: doc.id,
//             label: doc.data().nome,
//           }))
//         );
//       } catch (error) {
//         console.error("Erro ao buscar famílias: ", error);
//       }
//     };

//     const fetchCandidates = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "candidatos"));
//         setCandidates(
//           querySnapshot.docs.map((doc) => ({
//             value: doc.id,
//             label: doc.data().nome,
//           }))
//         );
//       } catch (error) {
//         console.error("Erro ao buscar candidatos: ", error);
//       }
//     };

//     fetchGroups();
//     fetchCandidates();
//   }, []);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "votos"), (querySnapshot) => {
//       if (querySnapshot.empty) {
//         setVoteData({});
//         return;
//       }

//       const voteCounts = {};
//       querySnapshot.forEach((doc) => {
//         const { candidateId } = doc.data();
//         if (voteCounts[candidateId]) {
//           voteCounts[candidateId]++;
//         } else {
//           voteCounts[candidateId] = 1;
//         }
//       });

//       const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0);

//       const labels = candidates.map((candidate) => candidate.label);
//       const data = candidates.map((candidate) =>
//         totalVotes ? (voteCounts[candidate.value] || 0) / totalVotes : 0
//       );

//       setVoteData({
//         labels,
//         datasets: [
//           {
//             data,
//             backgroundColor: candidates.map(
//               (_, i) => `hsl(${(i * 360) / candidates.length}, 70%, 70%)`
//             ),
//           },
//         ],
//       });
//     });

//     return () => unsubscribe();
//   }, [candidates]);

//   const handleVote = async () => {
//     try {
//       if (!selectedGroup || !selectedCandidate) {
//         toast.error("Selecione uma família e um candidato.");
//         return;
//       }

//       const votesRef = collection(db, "votos");
//       const q = query(votesRef, where("groupId", "==", selectedGroup.value));
//       const querySnapshot = await getDocs(q);

//       if (!querySnapshot.empty) {
//         const group = groups.find(
//           (group) => group.value === selectedGroup.value
//         );
//         toast.warning(
//           `Família ${group ? group.label : "desconhecida"} já votou.`
//         );
//         return;
//       }

//       await addDoc(votesRef, {
//         groupId: selectedGroup.value,
//         candidateId: selectedCandidate.value,
//       });

//       toast.success("Seu voto foi registrado!");
//     } catch (error) {
//       console.error("Erro ao registrar o voto: ", error);
//       toast.error(
//         "Houve um erro ao processar seu voto. Por favor, tente novamente."
//       );
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <h1>Votação - Unidos em Ascensão (UAN)</h1>
//         <div>
//           <label>
//             Selecione a Família:
//             <Select
//               value={selectedGroup}
//               onChange={setSelectedGroup}
//               options={groups}
//               placeholder="Selecione uma família"
//               isClearable
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Selecione o Candidato:
//             <Select
//               value={selectedCandidate}
//               onChange={setSelectedCandidate}
//               options={candidates}
//               placeholder="Selecione um candidato"
//               isClearable
//             />
//           </label>
//         </div>
//         <button onClick={handleVote}>Votar</button>
//         <ToastContainer />

//         <button onClick={() => setShowResults(!showResults)}>
//           {showResults ? "Esconder Resultados" : "Mostrar Resultados"}
//         </button>

//         {showResults && (
//           <div className="chart-box">
//             {Object.keys(voteData).length === 0 ? (
//               <p>Não há votos registrados ainda.</p>
//             ) : voteData.labels && voteData.datasets ? (
//               <Pie
//                 data={voteData}
//                 options={{
//                   plugins: {
//                     datalabels: {
//                       formatter: (value, context) => {
//                         const dataset =
//                           context.chart.data.datasets[context.datasetIndex];
//                         const total = dataset.data.reduce(
//                           (acc, val) => acc + val,
//                           0
//                         );
//                         const percentage =
//                           ((value / total) * 100).toFixed(2) + "%";
//                         return percentage;
//                       },
//                       color: "#fff",
//                       font: {
//                         weight: "bold",
//                       },
//                     },
//                     legend: {
//                       position: "top",
//                     },
//                     tooltip: {
//                       callbacks: {
//                         label: (tooltipItem) => {
//                           const dataset = tooltipItem.dataset;
//                           const total = dataset.data.reduce(
//                             (acc, val) => acc + val,
//                             0
//                           );
//                           const value = tooltipItem.raw;
//                           const percentage =
//                             ((value / total) * 100).toFixed(2) + "%";
//                           return `${tooltipItem.label}: ${percentage}`;
//                         },
//                       },
//                     },
//                   },
//                 }}
//               />
//             ) : (
//               <p>Carregando dados do gráfico...</p>
//             )}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Uan;
