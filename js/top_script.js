// ページ全体（画像などを含む）が完全に読み込まれた後に実行
window.addEventListener('load', function() {
    const splash = document.getElementById('splash');
    const mainContainer = document.querySelector('.main-container'); // メインコンテナを取得

    
    // スライドインアニメーションを開始
    if (splash) {
        splash.classList.add('is-active');

        // スライドインアニメーションが完了するまで待機（CSSで1.5s設定）
        setTimeout(function() {
            // ローディング画面全体をフェードアウトさせる
            splash.classList.add('fade-out');

            // ローディング画面が非表示になったタイミングでメインコンテンツを表示
            // フェードアウトアニメーション（0.8秒）が完了した後に実行
            setTimeout(function() {
                if (mainContainer) {
                    // main-containerにis-loadedクラスを付与し、CSSでopacity: 1を適用する
                    mainContainer.classList.add('is-loaded');
                }
            }, 800); // フェードアウト時間(0.8秒)後
        }, 1500); // スライドイン時間(1.5秒)後
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const groupLogo = document.getElementById('groupLogo');
    
    // グループロゴが存在する場合に処理を実行
    if (groupLogo) {
        // マウスオーバー時の処理
        groupLogo.addEventListener('mouseover', function() {
            // 例: ロゴを少し拡大するアニメーション
            groupLogo.style.transition = 'transform 0.3s ease-out';
            groupLogo.style.transform = 'scale(1.05)';
        });

        // マウスアウト時の処理
        groupLogo.addEventListener('mouseout', function() {
            // 例: 元のサイズに戻す
            groupLogo.style.transform = 'scale(1)';
        });

        // オプション: 各事業カードのクリックログをコンソールに出力
        const businessCards = document.querySelectorAll('.business-card');
        businessCards.forEach(card => {
            card.addEventListener('click', function(event) {
                // リンク先へ遷移する前にログを出力
                console.log('事業リンクがクリックされました:', this.querySelector('.department-name').textContent);
            });
        });
    }
});