import React from "react";

console.log('sökpersonal');

const Home = () => {
    return(

        <div>
            <div>
                <p>Bli anställd & få 10.000 kr</p>
                <p>Marknadens lättaste, billigaste och bästa sätta för arbetsgivare att hitta personal</p>
                <button>Hur funkar det?</button>
            </div>
            <div>
                <p>Ladda up ditt cv och låt arbetsgivare hitta dig idag</p>
                    <form>
                        <span>&#x1F50E;</span>
                            <input type="text" name="sokKompetens" placeholder="Sök kompetens"/>
                        <span>&#127760;</span>
                            <input type="text" name="location" placeholder="Vart i Sverige?"/>
                            <input type="submit" value="Sök"/>
                    </form>
            </div> 
        </div>
    );
}

export default Home; 
