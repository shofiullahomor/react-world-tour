import { useState } from "react";
// import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, capital, flags, population, currencies, coatOfArms } = country;
  const [visited, setVisited] = useState(false);
  const [details, setDetails] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: "black" }}>
        Name: <span style={{ color: "green" }}>{name?.common}</span>
      </h3>
      <h4>
        Capital: <span style={{ color: "green" }}> {capital}</span>
      </h4>
      <h4>Population: {population}</h4>

      <img className="img" src={flags.png} alt="" />
      <button className="btn btn-primary " onClick={handleVisited}>
        {visited ? "visited" : "Going"}
      </button>
      {visited ? "I have visited this country" : "I want to go"}
      <br />
      <button onClick={() => handleVisitedCountry(country)}>
        Mark visited
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Add Flag
      </button>
      <button onClick={() => setDetails(true)}>Details</button>

      {details && (
        <div
          className="modal-overlay"
          className="modal-overlay"
          onClick={() => setDetails(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Name: {name?.common}</h2>
            <h4>Capital: {capital}</h4>
            <h4>population: {population}</h4>
            <img className="img" src={flags.png} alt="" />
            <h4>coatOfArms</h4>
            <img className="img" src={coatOfArms.png} alt="" />

            <button
              className="close-modal-btn"
              onClick={() => setDetails(false)}
            >
              close details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Country;
/*
{
    "name": {
        "common": "Grenada",
        "official": "Grenada",
        "nativeName": {
            "eng": {
                "official": "Grenada",
                "common": "Grenada"
            }
        }
    },
    "tld": [
        ".gd"
    ],
    "cca2": "GD",
    "ccn3": "308",
    "cca3": "GRD",
    "cioc": "GRN",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
        "XCD": {
            "name": "Eastern Caribbean dollar",
            "symbol": "$"
        }
    },
    "idd": {
        "root": "+1",
        "suffixes": [
            "473"
        ]
    },
    "capital": [
        "St. George's"
    ],
    "altSpellings": [
        "GD"
    ],
    "region": "Americas",
    "subregion": "Caribbean",
    "languages": {
        "eng": "English"
    },
    "translations": {
        "ara": {
            "official": "غرينادا",
            "common": "غرينادا"
        },
        "bre": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "ces": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "cym": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "deu": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "est": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "fin": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "fra": {
            "official": "Grenade",
            "common": "Grenade"
        },
        "hrv": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "hun": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "ita": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "jpn": {
            "official": "グレナダ",
            "common": "グレナダ"
        },
        "kor": {
            "official": "그레나다",
            "common": "그레나다"
        },
        "nld": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "per": {
            "official": "گرنادا",
            "common": "گرنادا"
        },
        "pol": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "por": {
            "official": "Grenada",
            "common": "Granada"
        },
        "rus": {
            "official": "Гренада",
            "common": "Гренада"
        },
        "slk": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "spa": {
            "official": "Granada",
            "common": "Grenada"
        },
        "srp": {
            "official": "Гренада",
            "common": "Гренада"
        },
        "swe": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "tur": {
            "official": "Grenada",
            "common": "Grenada"
        },
        "urd": {
            "official": "گریناڈا",
            "common": "گریناڈا"
        },
        "zho": {
            "official": "格林纳达",
            "common": "格林纳达"
        }
    },
    "latlng": [
        12.11666666,
        -61.66666666
    ],
    "landlocked": false,
    "area": 344,
    "demonyms": {
        "eng": {
            "f": "Grenadian",
            "m": "Grenadian"
        },
        "fra": {
            "f": "Grenadienne",
            "m": "Grenadien"
        }
    },
    "flag": "🇬🇩",
    "maps": {
        "googleMaps": "https://goo.gl/maps/rqWyfUAt4xhvk1Zy9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/550727"
    },
    "population": 112519,
    "fifa": "GRN",
    "car": {
        "signs": [
            "WG"
        ],
        "side": "left"
    },
    "timezones": [
        "UTC-04:00"
    ],
    "continents": [
        "North America"
    ],
    "flags": {
        "png": "https://flagcdn.com/w320/gd.png",
        "svg": "https://flagcdn.com/gd.svg",
        "alt": "The flag of Grenada features a large central rectangular area surrounded by a red border, with three five-pointed yellow stars centered on the top and bottom borders. The central rectangle is divided diagonally into four alternating triangular areas of yellow at the top and bottom and green on the hoist and fly sides, and a five-pointed yellow star on a red circle is superimposed at its center. A symbolic nutmeg pod is situated on the green hoist-side triangle."
    },
    "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/gd.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/gd.svg"
    },
    "startOfWeek": "monday",
    "capitalInfo": {
        "latlng": [
            32.38,
            -64.68
        ]
    }
}

*/
