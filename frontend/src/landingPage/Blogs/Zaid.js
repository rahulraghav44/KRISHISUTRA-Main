import React from 'react';

function Zaid() {
    const sectionStyle = {
        background: "#f8f9fa",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      };
    return (       
    <section className="season" style={sectionStyle}>
        <h2 style={{color:"#34495e"}}>Zaid Season (Summer Crops)</h2>
        <p>
          Zaid crops are grown in the <strong>short summer season (March-June)</strong> between Rabi and Kharif. They require <strong>high temperatures</strong> and longer <strong>daylight hours</strong>. These crops rely on <strong>irrigation</strong>.
        </p>
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Water Requirement</th>
              <th>pH Requirement</th>
              <th>Temperature Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Watermelon</td>
              <td>400-600 mm</td>
              <td>6.0-6.8</td>
              <td>25-35°C</td>
            </tr>
            <tr>
              <td>Cucumber</td>
              <td>400-600 mm</td>
              <td>5.5-7.0</td>
              <td>22-30°C</td>
            </tr>
            <tr>
              <td>Pumpkin</td>
              <td>400-600 mm</td>
              <td>5.5-7.0</td>
              <td>22-30°C</td>
            </tr>
          </tbody>
        </table>
      </section> );
}

export default Zaid;