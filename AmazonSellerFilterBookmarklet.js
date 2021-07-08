javascript: (
    function () {
        const amazonDomain = 'www.amazon.co.jp';   // amazon.co.jpドメインのみ対象
        const pathName = '/s';  // 検索結果ページのみ対象
        const filterName = 'emi';
        const filterValue = 'AN1VRQENFRJN5';

        let uri = new URL(window.location.href);
        if (uri.hostname == amazonDomain && uri.pathname == pathName) {
            let emi = uri.searchParams.get(filterName);
            if (emi == null) {
                uri.searchParams.append(filterName, filterValue);
            } else {
                uri.searchParams.set(filterName, filterValue)
            }
            location.href = uri;
        }
    }
)();
