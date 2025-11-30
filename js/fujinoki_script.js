/**
 * 居宅介護支援事業所 ふじの樹 向けJavaScript
 * ページ内リンクのスムーススクロール処理
 */
document.addEventListener('DOMContentLoaded', () => {
    // ページ内アンカーリンク（#で始まるリンク）をすべて取得
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            // デフォルトのアンカー遷移をキャンセル
            event.preventDefault();

            // リンク先のIDを取得
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // スムーススクロールを実行
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // ヘッダーがStickyの場合、位置調整を行う（ヘッダーの高さ分オフセット）
                const headerHeight = document.querySelector('header').offsetHeight;
                window.scrollBy(0, -headerHeight);
            }
        });
    });

    console.log('fujinoki_script.js loaded successfully. Smooth scroll enabled.');
});

// **注意**: HTML側で「メールフォーム」ボタンが直接 mailto:fujinoki@doiidt.com に変更されたため、
// 以前のカスタムモーダルを表示する handleMailContact() 関数は不要となり削除されました。