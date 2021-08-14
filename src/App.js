import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}

//復習

//1.テンプレート文字列
// const name = "ダイゴ";
// const age = 25;

// const message = `私の名前は${name}です。年齢は${age}です`;

// console.log(message);

//2.アロー関数
// const func = (str) => {
//   return (
//     str
//   );
// };

// console.log(func("光の巨人"));

//3.分割代入
//オブジェクトのとき
// const myProfile = {

//   name1:"マドカ",
//   age1:25
// };

//順番に取り出したい
// const {name1,age1} = myProfile

// const message2 = `名前は${name1}です、年齢は${age1}です`;
// console.log(message2);

//配列の時

// const myProfile2 =[`マドカダイゴ`,25];

// const [name2,age2] = myProfile2;

// const message3 = `名前は${name2}です、年齢は${age2}です`;

// console.log(message3);

//4.デフォルト値と引数
// const sayHello = (name) => console.log(`こんにちは${name}さん`);
// sayHello("マドカダイゴ");

//5.スプレッド構文
//配列の展開ができる
// const arr1 = [1, 2, 3, 4, 5];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//配列をまとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// //logの結果
// //1
// console.log(num2);
// //logのの結果
// //2
// console.log(arr3);
//logの結果
//[3,4,5]

//配列のコピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// //logの結果
// //[10,20]
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// //エラーの温床
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
//[100,20]

//6.mapやfilter
// const nameArr = ["しんちゃん","ぼうちゃん","ねねちゃん"];
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// //名前を順番に出力する方法
// nameArr.map((name) => console.log(name));

// //何番目かを付けて出力
// nameArr.map((name,index)=> console.log(`${index + 1}番目は${name}です`));

// const newNameArr = nameArr.map((name)=>{
//   if (name === "しんちゃん"){
//     return `クレヨン${name}`
//   }else{
//     return name
//   }
// })
// console.log(newNameArr);

//filter
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

//三項演算子
// const val1 = 1 > 0 ? `trueです`　: `falseです`;
// console.log(val1);

// const num = 1300
//3桁めに,を入れるプロパティを使う
// console.log(num.toLocaleString());

// const num1 = 1200
// const formattedNum = typeof num === 'number' ? num1.toLocaleString() : `数値を入力して下さい`;
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています`　: `許容範囲内です`;
// }
// console.log(checkSum(50,90));

// const num = 200;
// const fee = num || "金額未設定です";
// console.log(fee);

// const num2 = 200;
// const fee2 = num2 && "何か設定されています";
// console.log(fee2);