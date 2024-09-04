import { CatalogCard } from "../../components/CatalogCard/catalogCart";
import { Footer } from "../../components/Footer/footer";
import "./dist/catolog.css";

import { useGetSectionsQuery } from "../../store/sectionsApi";

export function Catalog() {
    const { data, isLoading, error } = useGetSectionsQuery();

    return (
        <div className="catalog_page">
            <h1 className="catalog_title">КАТАЛОГ</h1>
            <div className="catalog_con">
                {isLoading && <p>Loading...</p>}
                {error && <p>Error loading catalog sections.</p>}
                
                {data && data.map((section, index) => (
                    <CatalogCard key={index} section={section} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
