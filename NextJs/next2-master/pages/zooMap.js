import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const zooMap = () => {

    return (

        <div ><a
            href="https://yandex.ru/maps/49/penza/search/%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/?utm_medium=mapframe&utm_source=maps"
            >Зоомагазин в Пензе</a><a
            href="https://yandex.ru/maps/49/penza/?utm_medium=mapframe&utm_source=maps"
            ></a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?display-text=%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD&from=tabbar&ll=45.005496%2C53.195103&mode=search&page=3&sctx=ZAAAAAgBEAAaKAoSCbYsX5fhg0ZAER4zUBn%2FmEpAEhIJ4nMn2H8d5z8RRL5LqUvGzz8iBgABAgMEBSgKOABAsooGSAFiMmNvbGxlY3Rpb25zX3JhbmtpbmdfbW9kZWw9Y29sbGVjdGlvbnNfcmVsZXZfd19kc3NtYiVjb2xsZWN0aW9uc19yZWxldl90aHJlc2hvbGQ9MTAwNTAwMDAwYiBjb2xsZWN0aW9uc19yZXR1cm5fYnlfZ2VvaWQ9dHJ1ZWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Db2xsZWN0aW9ucy9NaXhFYWNoTlBvc2l0aW9uPTEwMDUwMGI3cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Db2xsZWN0aW9ucy9GaXJzdFBvc2l0aW9uVG9NaXg9M2IycmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Db2xsZWN0aW9ucy9FbmFibGVkTWl4PXRydWVqAnJ1nQHNzEw9oAEAqAEAvQE5qMYwwgHiA86qjL531vaKhwWn792vBrHZh48EgtXf7QTA8PW0Bp602damBPSKw%2B24BLqx3sIjweT%2BpcgDq56DuwaZmoGWvQLJ0rbqkgWykeL98gbP0YCsBoPX5a%2BBBtjqp4YEn%2FLUsNoGx83XxQaUy5PIBqLkuNOfAc20p4TbAajpr%2Bu%2BAdHzk9%2FgBrqP2%2FHgBPG24dbJBIixrqsGvKin%2FtUE8PrB1sEFxca8t78EhvPuvo8Bq%2Frp1YsBmuu99gO41ZfhN57%2FpI%2BrBZnYuetC8frx4XGGw5f%2B2gaBrKmLBZjmiIydBOa8%2FcWiA4Duk8vVAri1w5oE%2BsLJ%2FgTmpf6eqAWdlICIBdj8ka%2F%2FAv7hzeOQB9TtjOaQBfqf87CiAsDFja4GieGEhcgG97e1%2FgO5ybCN2gTmvOCGigPoodGh3Qa88ISmBums%2FKemBvODgZQEko2estAGrdTN1gaGgPG16gO8t%2FTy6AaTp7OS9QP60cGoRsjBwcOGBfze7Y4EgZPF0rgFqpbZjqYG9oGX6IYGpt6P%2BKsEmPSP5uIDqdztzY8E%2Br6LiuIGiK3R0li705iRBLaKysiGAbSaw9vhAarriuoDmtOplK8C%2BtqGtgaxo9S7tQW%2B3IzCxgWf8KzW1gSTqJuGBKyNpP9n6gEA8gEA%2BAEDggIbKChjYXRlZ29yeV9pZDooMTg0MTA3MjIyKSkpigIJMTg0MTA3MjIykgIAmgIMZGVza3RvcC1tYXBz&sll=45.005496%2C53.195103&source=serp_navig&sspn=0.214756%2C0.073802&text=%7B%22text%22%3A%22%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184107222%22%5D%7D%5D%7D&z=12.75"
                width="560" height="400" frameBorder="1" allowFullScreen="true" ></iframe>
        </div>

    );
}

zooMap.getInitialProps = async (ctx) => {
    return {}
}


export default zooMap;
