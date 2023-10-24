
import React, { useState,  useRef } from "react";
import ReactJSBarcode from 'react-jsbarcode/lib/index';
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import { Layout } from "../components";


export const TagGenerator = () => {

  const conponentPDF = useRef<HTMLDivElement | null>(null);
  const [labels, setLabels] = useState<string[]>([]);



  const generatePDF = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
    onAfterPrint: () => alert("Data saved in PDF")
  });


  const procesarDatos = (item: any, index: number, data: any) => {
    return <div className={`rounded bg-white border border-dark px-2 py-2 my-2 ${item[0] === '.' ? 'd-flex justify-content-center align-items-center py-2 ' : 'py-3'}`} style={{ width: '18rem', height: '9.4rem' }}>
      {item[0] === '.' ? <h1 className='text-center font-weight-bold '>{data[index + 1][0].replace(/^.+\s+/, '')}</h1> :
        <h6 className='text-center font-weight' style={{ fontSize: '0.85rem' }}>${item[2]}</h6>}
      {item[0] !== '.' &&
        <div className='d-flex justify-content-center '>
          <ReactJSBarcode value={item[3]} options={{ format: 'code128', marginTop: 2, textMargin: 6, height: 55 }} />
        </div>
      }
    </div>
  }

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /* Update state */
      const labelsTag: any[] = []
      data.map((item: any, index) => {
        if (item[0] === '.') {
          const label = procesarDatos(item, index, data)
          labelsTag.push(label);
        } else {
          if (item.length === 5 && typeof item[4] === 'number') {
            const label = procesarDatos(item, index, data)
            labelsTag.push(label);
          }
        }
      })
      setLabels(labelsTag)

    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  }


  return (
    <Layout>
      <div className='text-center bg-light w-100 p-4' style={{  height: '90vh' }} >
        <div>
          <input
            type="file"
            className="form-control"
            id="file"
            accept=".xlsx"
            onChange={handleChange}
          />


          <button onClick={generatePDF}>Generate PDF</button>
          <div ref={conponentPDF} >
            <React.Fragment >
              {labels.map((label, index) => (
                <div key={index}>
                  {label}
                </div>
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </Layout>
  )
};
