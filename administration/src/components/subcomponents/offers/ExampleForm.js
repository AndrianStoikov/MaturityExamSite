import React, { Component } from 'react'
import Form from '../../form/Form'
import TextGroup from '../../form/TextGroup'
import RadioElement from '../../form/RadioElement'
import Submit from '../../form/Submit'

export default class ExampleForm extends Component {
  doNothing () {
    return
  }

  render () {
    return (
      <Form
        title='Create Procedure'
        readOnly>

        <TextGroup
          type='text'
          value='Example'
          label='TITLE'
          handleChange={this.doNothing.bind(this)}
          readOnly
        />

        <div>
          <TextGroup
            type='text'
            value={`МАШИНАТА СЕ ПОСТАВЯ В САЛОНА ЗА КРАСОТА`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`НАСРОЧВА СЕ ДЕН/ДНИ ЗА ИЗПЪЛНЕНИЕ НА ПРОЦЕДУРИТЕ.`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`ИЗПЪЛНИТЕЛНО ЛИЦЕ ОТ MIBODY ИЗВЪРШВА ПРОЗЕДУРИТЕ.`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`МАШИНАТА СЕ ПОСТАВЯ В САЛОНА ЗА КРАСОТА`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`ИЗВЪРШВА СЕ ОБУЧЕНИЕ НА ЛИЦЕ ОТ ПЕРСОНАЛА НА САЛОНА, КОЕТО ДА РАБОТИ С МАШИНАТА.`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={`Scratched`}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`<b>30%</b> ОТ ОБОРОТА ОСТАВА ЗА САЛОНА.`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`БЕЗПЛАТНИ ПРОЦЕДУРИ ЗА СОБСТВЕНИКА/ЧКАТА НА САЛОНА.`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`50% ОТСТЪПКА НА ВСИЧКИ ПРОЦЕДУРИ ЗА ПЕРСОНАЛА НА САЛОНА`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`ОТ СТРАНА НА САЛОНА`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={`Subtitle`}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`50% ОТСТЪПКА НА ВСИЧКИ ПРОЦЕДУРИ ЗА ПЕРСОНАЛА НА САЛОНА`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`ДА ИНФОРМИРА ВСИЧКИ СВОИ КЛИЕНТИ И ДА ЗАПИСВА ЖЕЛАЕЩИТЕ`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`ДА НАПОМНЯ ЕДИН ДЕН ПРЕДВАРИТЕЛНО НА КЛИЕНТИТЕ ЗА ПРОЦЕДУРАТА / ДА ИЗПРАЩА ИМЕНАТА И ТЕЛ. НОМЕР ЕДИН ДЕН ПРЕДВАРИТЕЛНО, ЗА ДА СЕ ОБАДИ ПРЕДСТАВИТЕЛ НА MIBODY`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={`<b>БЕЗ ИНВЕСТИЦИЯ</b>`}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <div>
          <TextGroup
            type='text'
            value={``}
            label={'CONTENT'}
            handleChange={this.doNothing.bind(this)}
            readOnly
          />
          <Form>
            <RadioElement
              groupName='subtitle'
              value={`Subtitle`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
            <RadioElement
              groupName='scratched'
              value={`Scratched`}
              selectedValue={``}
              handleChange={this.doNothing.bind(this)}
              readOnly/>
          </Form>
        </div>

        <Submit
          type='btn-round btn-b'
          value='Create'/>
      </Form>
    )
  }
}