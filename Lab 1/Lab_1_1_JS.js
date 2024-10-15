let A, B, C, D, E; // --> CEDAB
A = prompt("Input value of A");
B = prompt("Input value of B");
C = prompt("Input value of C");
D = prompt("Input value of D");
E = prompt("Input value of E");
let temp = A;
A = C;
let temp_2 = B;
B = E;
C = D;
D = temp;
E = temp_2;
alert(`A = ${A}, B = ${B}, C = ${C}, D = ${D}, E = ${E}`);