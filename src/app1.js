import "./app1.css";
import $ from "jquery";

const $button1 = $("#add1");
const $button2 = $("#minus1");
const $button3 = $("#mul2");
const $button4 = $("#divide2");
const $number = $("#number");
const n = localStorage.getItem("n"); //第一次要初始化 n，使用localStorage get、set实现每次刷新页面数据也不会丢失
$number.text(n || 100); //把 n 写到 number 中

$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n); //每次改变后的n都存到localStorage中
  $number.text(n); //把 +1 过的 n 放回去
});
$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n); //把 -1 过的 n 放回去
});
$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n); //把 *2 过的 n 放回去
});
$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n); //把 /2 过的 n 放回去
});
