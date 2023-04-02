`use strict`;

{
  const btn = document.getElementById(`btn`);
  const result = document.getElementById(`result`);
  const oneadvice = document.getElementById(`oneadvice`);
  const advice = document.getElementById(`advice`);
  const tyuui = document.getElementById(`tyuui`);



  btn.addEventListener(`click`, () => {
    const results = [`大吉`,`天使吉`,`７７７吉`,`幸運吉`,`神吉`];
    const oneadvicetext = [`目的を明確にする!`,`マナーを守る!`,`コミュニケーションを大切にする!`,`クオリティの高いコンテンツを作る!`,`コンスタントに活動する!`];
    const advicetext = [
    `配信を始める前に、自分が何を目的に活動するのかを明確にすることが重要です。自分が何を伝えたいのか、どんなファン層をターゲットにするのかを考え、その方向性に沿った配信を行うことが大切です。`,
    `配信中は常にマナーを守りましょう。他の人への配慮やネットワークのルールを守ることが、良好な視聴者との関係性を築く上で重要です。`,
    `配信中にコメントやチャットなどから届いたファンの声に返信するなど、コミュニケーションを大切にすることが大切です。視聴者との交流を深めることで、共感や信頼を得ることができます。`,
    `Vtuberとして成功するためには、高品質のコンテンツを作ることが欠かせません。配信の映像や音声のクオリティを高め、面白く興味深いコンテンツを提供することが重要です。`,
    `コンスタントに配信活動を行うことが、Vtuberとして成功するために欠かせません。定期的に配信スケジュールを設定し、視聴者にとっても期待できる存在であることをアピールしましょう。`];


    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
    oneadvice.textContent = oneadvicetext[n];
    advice.textContent = advicetext[n];
    tyuui.textContent = `※注意このアドバイスはChatGPTにより生成されました。`
    
    }
  );
}

document.querySelector(".button").addEventListener("click", function (e) {
    party.confetti(this, {
        count: party.variation.range(20, 40),
    });
});