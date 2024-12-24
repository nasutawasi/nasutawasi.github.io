const videos = {
  music: [
    { title: "heavy metal Full.1", url: "https://www.youtube.com/watch?v=kVDRgC0GIUI" },
    { title: "heavy metal Full.2", url: "https://www.youtube.com/watch?v=yxj_Apl3gW4" },
    { title: "heavy metal Full.3", url: "https://www.youtube.com/watch?v=yxj_Apl3gW4" },
    { title: "hardstyle full", url: "https://www.youtube.com/watch?v=RN37y4W2T4g" },
    { title: "EDM full", url: "https://www.youtube.com/watch?v=Mxc3OipJ23E" },
  ],
  sports: [
    { title: "淫夢バッジ編", url: "https://www.youtube.com/watch?v=15eC-4aZtwg" },
    { title: "野獣先輩ダンス(tiktok)", url: "https://www.youtube.com/watch?v=mY5RJf1NwBU" },
    { title: "野獣先輩ダンス(niconico)", url: "https://www.youtube.com/watch?v=DQFxW-v0WSQ" },
    { title: "きららアニメ", url: "https://www.youtube.com/watch?v=HG0hT_WPLiw" },
    { title: "演歌", url: "https://www.youtube.com/watch?v=U6OsJJMvgKA" },
  ],
  education: [
    { title: "YAJU&U", url: "https://www.youtube.com/watch?v=niKAylKNIEI" },
    { title: "ミュージカル1", url: "https://www.youtube.com/watch?v=8OZ851_-EKE" },
    { title: "ミュージカル2", url: "https://www.youtube.com/watch?v=dma4TPPrdjU" },
    { title: "ミュージカル3(コメ付き)", url: "https://www.youtube.com/watch?v=VSxb4rnuZ5k" },
  ],
  MAD: [
    { title: "ブルアカ淫夢(おとめっど)", url: "https://www.nicovideo.jp/watch/sm43939977" },
    { title: "淫夢ゴロック(吹替版)", url: "https://www.youtube.com/watch?v=_i_UpVf2GEI" },
    { title: "ニセ淫夢語録集(東大編)", url: "https://www.youtube.com/watch?v=FcXHccAcG7k" },
    { title: "ニセ淫夢語録集(粘土マン)", url: "https://www.youtube.com/watch?v=zO2HlSqoRsU&list=PLMMGsMdWrA-GoypwNCLaU9SBnb20lO91_" },
  ],
  anothermeme: [
    { title: "落としちゃった:powerfull", url: "https://www.youtube.com/watch?v=KzYzzlNgOeI" },
    { title: "落としちゃった:Hard rock", url: "https://www.youtube.com/watch?v=8BOrsGeXgSE" },
    { title: "落としちゃった:musical", url: "https://www.youtube.com/watch?v=IXhCEuOMdt4" },
    { title: "落としちゃった:summer", url: "https://www.youtube.com/watch?v=0JpHtRwDnd4" },
    { title: "落としちゃった:band", url: "https://www.youtube.com/watch?v=qOFjk3k8_Qs" },
  ],
};

// ジャンルボタンをクリックしたときの処理
document.querySelectorAll(".genre-button").forEach(button => {
  button.addEventListener("click", () => {
    const genre = button.getAttribute("data-genre");
    const message = button.getAttribute("data-message").replace(/\\n/g, "<br>"); // 改行をHTMLの<br>に置き換え
    const videoList = document.getElementById("video-links");
    const listTitle = document.getElementById("list-title");

    // h2のタイトルを更新（改行を反映）
    listTitle.innerHTML = message;

    // 動画リストをクリアして更新
    videoList.innerHTML = "";
    videos[genre].forEach(video => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = video.url;
      a.target = "_blank";
      a.textContent = video.title;
      li.appendChild(a);
      videoList.appendChild(li);
    });
  });
});
