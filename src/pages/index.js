import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
 <Layout>
    <SEO title="Home" />
   <h3>Sir Thomas Sean Connery</h3>
    <h5>Scotland's Greatest National Treasure</h5>
    <StaticImage
      src="https://www.commeuncamion.com/wp-content/uploads/2014/09/sean-connery-kilt-.jpg"
      alt="Sean Connery"
      width={400}
      height={500}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>Early Life</h3>
      <p>Sir Thomas Sean Connery (born 25 August 1930) is a retired Scottish actor and producer who has won an Academy Award, two BAFTA Awards and three Golden Globes Awards.</p>
      <p>Connery was the first actor to portray the character James Bond in film, starring in seven Bond films between 1962 and 1983.</p>
      <p>Connery has been polled as "The Greatest Living Scott" and "Scotland's Greatest Living National Treasure". In 1989, he was proclaimed "Sexiest Man Alive" by People magazine, and in 1999, at age 69, he was voted "Sexiest Man of the Century". Connery was knighted in the 2000 New Year Honours for services to Film Drama.</p>
      <h3>Career</h3>
      <p>Connery's breakthrough came in the role of secret agent James Bond. He was reluctant to commit to a film series, but understood that if the films succeeded his career would greatly benefit.</p> 
      <p>He played the character in the first five Bond films: Dr. No (1962), From Russia with Love (1963), Goldfinger (1964), Thunderball (1965), and You Only Live Twice (1967) - then appeared again as Bond in Diamonds Are Forever (1971) and Never Say Never Again (1983).</p> 
      <p>All seven films were commercially successful. James Bond, as portrayed by Connery, was selected as the third-greatest hero in cinema history by the American Film Institute. Connery's selection for the role of James Bond owed a lot to Dana Broccoli, wife of producer "Cubby" Broccoli, who is reputed to have been instrumental in persuading her husband that Connery was the right man.</p> 
      <p>James Bond's creator, Ian Fleming, originally doubted Connery's casting, saying, "He's not what I envisioned of James Bond looks", and "I'm looking for Commander Bond and not an overgrown stunt-man," adding that Connery (muscular, 6' 2", and a Scott) was unrefined. Fleming's girlfriend told him that Connery had the requisite sexual charisma, and Fleming changed his mind after the successful Dr. No (1962) premiere. He was so impressed, he created a half-Scottish, half-Swiss heritage for Bond in the later novels.</p> 
      <p>Connery's portrayal of Bond owes much to stylistic tutelage from director Terence Young, polishing the actor while using his physical grace and presence for the action. Lois Maxwell, who played Miss Moneypenny, related that, "Terence took Sean under his wing. He took him to dinner, showed him how to walk, how to talk, even how to eat." The tutoring was successful; Connery received thousands of fan letters a week, and the actor became one of the great male sex symbols of film.</p> 
      <p>During the filming of Thunderball (1965), Connery's life was in danger in the sequence with the sharks in Emilio Largo's pool. He had been concerned about this threat when he read the script. Connery insisted that Ken Adam build a special Plexiglas partition inside the pool, but, despite this, it was not a fixed structure and one of the sharks managed to pass through it. He had to abandon the pool immediately. Connery was forced to wear a toupee during each of the Bond movies because he had started balding at the age of 17.</p> 
      <p>This didn't prevent Connery from being cast in roles, although it became more noticeable in his later years. In 2005, From Russia with Love was adapted by Electronic Arts into a video game, titled From Russia with Love (2005), which featured all-new voice work by Connery as well as his likeness, and those of several of the film's supporting cast.</p>
      <h6 class="text-center">For more information on <em>Sean Connery</em> visit his <a href="https://en.wikipedia.org/wiki/Sean_Connery" target="_blank">Wikipedia Page</a>.</h6>
  
 </Layout>
)
export default IndexPage
