import './App.css'
import Card from './components/Card.tsx'
import cardImg from './assets/img.jpg';

function App() {
  return (
    <>
      <Card title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content." url="#url-1">
        <img src={cardImg} className="card-img-top" alt="..."/>
      </Card>

      <Card title="Special title treatment" text="With supporting text below as a natural lead-in to additional content." url="#url-2">
      </Card>
    </>
  )
}

export default App
