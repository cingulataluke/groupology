export const sample_queries = {
    'Elements': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q11344.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'African Countries': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q6256;
        wdt:P30 wd:Q15.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Muppets': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      VALUES ?types {
        wd:Q2120540
        wd:Q155629
      }
      ?item wdt:P1441 ?types.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'US State Capitals': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?state wdt:P31 wd:Q35657;
        wdt:P36 ?item.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Types of Numbers': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q47460393.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Internet Memes': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q2927074.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Mammals': `SELECT ?itemLabel WHERE {
  SELECT ?item (SAMPLE(?commonName) AS ?itemLabel) ?sitelinks WHERE {
    ?item (wdt:P171+) wd:Q7377.
    FILTER(NOT EXISTS { ?item wdt:P31 wd:Q23038290. })
    ?item wdt:P1843 ?commonName.
    FILTER((LANG(?commonName)) = "en")
    ?item wikibase:sitelinks ?sitelinks.
  }
  GROUP BY ?item ?sitelinks
}
ORDER BY DESC (?sitelinks)
LIMIT 45`,
    'Musical Instruments': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q110295396.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Dog Breeds': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q39367.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Olympic Sports': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q212434.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'D&D Monsters': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P279 wd:Q107765406;
        wdt:P1441 wd:Q1375.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Tolkien Characters': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P170 wd:Q892;
        wdt:P21 ?any.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Cartoonists': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P106 wd:Q715301.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'US VPs': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P39 wd:Q11699.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'SNL Cast Members': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      wd:Q13979 wdt:P161 ?item.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Tourist Destinations': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q570116.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'College Majors': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q4671286.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Car Brands': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q10429667.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Largest Publicly Traded Companies': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P361 wd:Q773026.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Programming Languages': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q9143.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Cheeses': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      VALUES ?types {
        wd:Q3088299
        wd:Q198815
        wd:Q1411808
      }
      ?item wdt:P279 ?types.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Pastas': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q2625877.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'MCU Characters': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P1080 wd:Q642878.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Rock Bands': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q215380;
        wdt:P136 wd:Q11399.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Birds': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P10007 ?any.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Tom Hanks Movies': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P161 wd:Q2263.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Celebrated 20th Century Novels': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P166 wd:Q4630676.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Trees': `SELECT (SAMPLE(?commonName) AS ?itemLabel) WHERE {
  ?item (wdt:P279+) wd:Q10884;
    wdt:P1843 ?commonName.
  FILTER((LANG(?commonName)) = "en")
}
GROUP BY ?item
LIMIT 45`,
    'Fallacies': `SELECT ?itemLabel WHERE {
  ?item (wdt:P279+) wd:Q186150.
  FILTER(NOT EXISTS { ?child wdt:P279 ?item. })
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}
LIMIT 45`,
    'Google Products': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P178 wd:Q95.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Minerals': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q429795.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Books of the Bible': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q29154430.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Beatles Songs': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P175 wd:Q1299.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Cocktails': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q2536409.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Flowers': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q506.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Fabrics': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P279 wd:Q28823.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Scifi TV Shows': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P136 wd:Q336059.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Keyboard Characters': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q27884930.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
    'Weather Words': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      VALUES ?types {
        wd:Q16332653
        wd:Q118733587
      }
      ?item wdt:P31 ?types.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 56
  }
  FILTER(LANG(?itemLabel))
}`,
    'Musicals': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P7937 wd:Q2743.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 54
  }
  FILTER(LANG(?itemLabel))
}`,
    'Legal Doctrines': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P31 wd:Q1192543.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 49
  }
  FILTER(LANG(?itemLabel))
}`,
    'Poets': `SELECT ?itemLabel WHERE {
  {
    SELECT DISTINCT ?itemLabel WHERE {
      ?item wdt:P106 wd:Q49757.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],mul,en". }
    }
    LIMIT 45
  }
  FILTER(LANG(?itemLabel))
}`,
}