const result = {
  words_result: [
    {
      words: "中通快递113/00053",
    },
    {
      words: " ZTO EXPRESS",
    },
    {
      words: "快递",
    },
    {
      words: "包裹",
    },
    {
      words: "2020/12/21",
    },
    {
      words: "18:13.36",
    },
    {
      words: "1/1",
    },
    {
      words: "310-n-01106",
    },
    {
      words: "75424083947142",
    },
    {
      words: "沪东",
    },
    {
      words: "收张先生",
    },
    {
      words: "18516559066",
    },
    {
      words: "上海上海市闵行区浦江镇浦",
    },
    {
      words: "江镇联航路1188号33号楼",
    },
    {
      words: "寄",
    },
    {
      words: "若禺",
    },
    {
      words: "15035905559",
    },
    {
      words: "重庆重庆市永川区朱沱理文工业园29号1仓库",
    },
    {
      words: "1-1-1ZS004A01纸品69508491975291",
    },
  ],
  log_id: "1386602157582581760",
  words_result_num: 19,
  direction: 0,
};

function init(datas, dom) {
  const style = `border: 1px solid #000; padding: 2px; cursor: pointer;`;
  dom.innerHTML = datas.map(v => `
    <span class="bung-item" style='${style}'>${v.words}</span>
  `).reduce((p, n) => p + n);
  
  Array.prototype.forEach.call(document.querySelectorAll('.bung-item'), element => {
    element.addEventListener('click', () => {
      document.querySelector('.bung-modal').style.visibility = 'visible';
      console.log(element.textContent);
    })
  });

  const modal = document.createElement('div');
  modal.className = 'bung-modal';
  modal.style.visibility = 'hidden'
  modal.innerHTML = `
  <div class="bung-inner" style="position: fixed; display: flex; justify-content: center; align-items: center; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0, 0, 0, 0.5); ">
    <div style="background-color: #fff; color: black; width: 100px;">
      <div class="bung-modal-item" style="padding: 10px; cursor: pointer;">地址</div>
      <div class="bung-modal-item" style="padding: 10px; cursor: pointer;">手机号</div>
      <div class="bung-modal-item" style="padding: 10px; cursor: pointer;">收件人</div>
    </div>
  </div>`;
  document.body.appendChild(modal);
  document.querySelector('.bung-inner').addEventListener('click', (e) => {
    document.querySelector('.bung-modal').style.visibility = 'hidden';
    e.preventDefault();
  });
  Array.prototype.forEach.call(document.querySelectorAll('.bung-modal-item'), element => {
    element.addEventListener('click', (e) => {
      console.log(element.textContent);
      //e.stopPropagation();
    })
  });

}

init(result.words_result, document.querySelector('#app'), (datas) => {
  console.log();
});