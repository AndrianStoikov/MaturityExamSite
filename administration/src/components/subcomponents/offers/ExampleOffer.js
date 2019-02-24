import React, { Component } from 'react'
import ExampleForm from './ExampleForm'

export default class ExampleOffer extends Component {
  render () {
    return (
      <section className='module'>
        <div className='container'>
          <h1>Примерна оферта и примерно попълнена бланка</h1>
          <div className="row multi-columns-row">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="price-table font-alt">
                <h4>Example</h4>
                <div className="borderline"/>
                <ul className="price-details">
                  <li>Машината се поставя в салона за красота.</li>
                  <li>Насрочва се ден/дни за изпълнение на процедурите.</li>
                  <li>Изпълнително лице от MiBody извършва прозедурите.</li>
                  <li><span>Извършва се обучение на лице от персонала на салона, което да работи с машината.</span></li>
                  <li><b>30%</b> от оборота остава за салона.</li>
                  <li>Безплатни процедури за собственика/чката на салона.</li>
                  <li>50% отстъпка на всички процедури за персонала на салона</li>
                  <li>
                    <h4>От страна на салона</h4>
                    <div className="borderline"/>
                  </li>
                  <li> Да информира всички свои клиенти и да записва желаещите</li>
                  <li>Да напомня един ден предварително на клиентите за процедурата / да изпраща имената и тел. номер
                    един ден предварително, за да се обади представител на Mibody
                  </li>
                  <li><b>БЕЗ ИНВЕСТИЦИЯ</b></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-11 col-md-11 col-lg-11">
              <ExampleForm/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}