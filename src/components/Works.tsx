import flashcards from '../../public/assets/flashcards-mockup.jpg'
import pebbles from '../../public/assets/pebbles-mockup.jpg'
import spotify from '../../public/assets/spotify-playlist-viewer-mockup.jpg'
import Section from './Section'
import Work from './Work'

function Works() {
  return (
    <Section title="recent<br />projects" id="works">
      <Work
        title="Pebbles"
        src={pebbles}
        alt="Mockup of a project called Pebbles"
        description="design / development / team project"
        link="https://github.com/jentlAntheunis/TeamProject-CronicPain"
      />
      <Work
        title="Spotify<br />Playlist Viewer"
        src={spotify}
        alt="Mockup of a project called Spotify Playlist Viewer"
        description="design / development"
        link="https://github.com/juul-vandevelde/Interaction-Design-Eindopdracht"
        mirror={true}
      />
      <Work
        title="Flashcards App"
        src={flashcards}
        alt="Mockup of a Flashcards App"
        description="design / development"
        link="https://github.com/juul-vandevelde/smartAppDev-eindopdracht"
      />
    </Section>
  )
}

export default Works
