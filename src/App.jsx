import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const VAT_RATE = 0.07;

  const grossPrice = price && discount
    ? parseFloat(price) - parseFloat(discount)
    : 0;

  const vat = (grossPrice * VAT_RATE).toFixed(2);

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>
      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br /><br />
      <label>
        Discount
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <div style={{ marginTop: '30px', fontSize: '24px', fontWeight: 'bold' }}>
        <p>Gross Price = {grossPrice}</p>
        <p>VAT = {vat}</p>
      </div>
    </div>
  );
}

export default App;
