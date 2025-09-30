import Card from './Card.jsx'
import Button from './Button.jsx'

export default function App() {
  return (
    <>
      <Card name="Brazilian Bourbon" country="Brazil" weight="200 g">
      <Button />
      </Card>
      
      <Card name="Malabar Monsoon" country="India" weight="200 g">
      <Button />
      </Card>

      <Card name="Kopi Luwak" country="Indonesia" weight="200 g">
      <Button />
      </Card>
    </> 
  );
}