import { CatalogCard } from "../../components/CatalogCard/catalogCart"
import { Footer } from "../../components/Footer/footer"
import "./dist/catolog.css"

export function Catalog(){
    return(
        <div className="catalog_page">
            <h1 className="catalog_title">КАТАЛОГ</h1>
            <div className="catalog_con">
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>
                <CatalogCard/>



            </div>

            <Footer/>

        </div>
    )
}