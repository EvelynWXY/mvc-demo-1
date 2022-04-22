import "./app2.css";
import $ from "jquery";

const $tabBar = $("#app2 .tab-bar");
const $tabContent = $("#app2 .tab-content");

//监听父元素
$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  console.log(index);
  $tabContent
    .children() //找到tabContent的儿子们
    .eq(index)
    .addClass("active") //第index个增加active类
    //.css({ display: "block" }) //不要使用：第index个变成display: "block"
    .siblings() //兄弟增加active类
    .removeClass("active");
  //.css({ display: "none" }); //不要使用：兄弟变成display: "none"
});
//找到第一个孩子自动触发 click 事件
$tabBar.children().eq(0).trigger("click");
