import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {Button, Icon, Label, Segment, Buttons} from 'stardust';

storiesOf('Button', module)
/*
 .addDecorator((story) => (
 <div style={{textAlign: 'center'}}>
 {story()}
 </div>
 ))
 */

  .addWithInfo(
    'Standard',
    `
      A standard button
      ~~~
      import React, { Component } from 'react'
      import { Button } from 'stardust'

      export default class ButtonButtonExample extends Component {
        render() {
          return (
            <Button>Get Started</Button>
          )
        }
      }
      ~~~
    `,
    () => (

      <Button onClick={action('click the button')}>Get Started</Button>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Emphasis',
    `
    Button formatting can reflect different types of emphasis

    `,
    () => (
      <div>
        <Button className='primary'>Primary</Button>
        <Button className='secondary'>Secondary</Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Emphasis 2',
    `
    Button formatting can reflect different types of emphasis

    `,
    () => (
      <div>
        <Button className="ui secondary Button">
          Okay
        </Button>
        <Button className="ui Button">
          Cancel
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Animated',
    `
          Buttons can animate to show additional or hidden content

          `,
    () => (
      <Button className='animated'>
        <div className='visible content'>Next</div>
        <div className='hidden content'>
          <Icon className='right arrow'/>
        </div>
      </Button>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled',
    `
    A button can appear alongside a label

    `,
    () => (
      <div>
        <Button className='labeled'>
          <Button>
            <Icon className='heart'/> Like
          </Button>
          {/* TODO: See issue #46 - button needs to render as a div */}
          <Label basic link>
            3,000
          </Label>
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled 2',
    `
    A button can appear alongside a label

    `,
    () => (
      <div>
        <Button className='basic red labeled'>
          <Button>
            <Icon className='heart'/> Like
          </Button>
          {/* TODO: See issue #46 - button needs to render as a div */}
          <Label basic red left pointing link>
            3,000
          </Label>
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Icon',
    `
      A button can be madke of only an icon
    `,
    () => (
      <div>
        <Button className='icon'>
          <Icon className='world'/>
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled Icon',
    `
      A button can use an icon as a label
    `,
    () => (

      <div>
        <Button className='labeled icon'>
          <Icon className='pause'/>
          Pause
        </Button>
        <Button className='right labeled icon'>
          <Icon className='right arrow'/>
          Next
        </Button>
      </div>


    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Basic',
    `
      The basic button has a subtle appearance
    `,
    () => (

      <div>
        <Button className='basic'>Standard</Button>
        <Button className='red basic'>Red</Button>
        <Button className='orange basic'>Orange</Button>
        <Button className='yellow basic'>Yellow</Button>
        <Button className='olive basic'>Olive</Button>
        <Button className='green basic'>Green</Button>
        <Button className='teal basic'>Teal</Button>
        <Button className='blue basic'>Blue</Button>
        <Button className='violet basic'>Violet</Button>
        <Button className='purple basic'>Purple</Button>
        <Button className='pink basic'>Pink</Button>
        <Button className='brown basic'>Brown</Button>
        <Button className='grey basic'>Grey</Button>
        <Button className='black basic'>Black</Button>
      </div>


    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Inverted',
    `
      A button can be formatted to appear on a dark background
    `,
    () => (

      <div>
        <Segment className='inverted'>
          <Button className='inverted'>Standard</Button>
          <Button className='inverted red'>Red</Button>
          <Button className='inverted orange'>Orange</Button>
          <Button className='inverted yellow'>Yellow</Button>
          <Button className='inverted olive'>Olive</Button>
          <Button className='inverted green'>Green</Button>
          <Button className='inverted teal'>Teal</Button>
          <Button className='inverted blue'>Blue</Button>
          <Button className='inverted violet'>Violet</Button>
          <Button className='inverted purple'>Purple</Button>
          <Button className='inverted pink'>Pink</Button>
          <Button className='inverted brown'>Brown</Button>
          <Button className='inverted grey'>Grey</Button>
          <Button className='inverted black'>Black</Button>
        </Segment>
        <Segment className='inverted'>
          <Button className='inverted basic'>Standard</Button>
          <Button className='inverted red basic'>Red</Button>
          <Button className='inverted orange basic'>Orange</Button>
          <Button className='inverted yellow basic'>Yellow</Button>
          <Button className='inverted olive basic'>Olive</Button>
          <Button className='inverted green basic'>Green</Button>
          <Button className='inverted teal basic'>Teal</Button>
          <Button className='inverted blue basic'>Blue</Button>
          <Button className='inverted violet basic'>Violet</Button>
          <Button className='inverted purple basic'>Purple</Button>
          <Button className='inverted pink basic'>Pink</Button>
          <Button className='inverted brown basic'>Brown</Button>
          <Button className='inverted grey basic'>Grey</Button>
          <Button className='inverted black basic'>Black</Button>
        </Segment>
      </div>


    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Buttons Group',
    `
     Buttons can exist together as a group
    `,
    () => (

      <Buttons>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Buttons>


    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Active',
    `
      A button can show it is currently the active user selection
    `,
    () => (


      <Button className='active'>
        <Icon className="user"></Icon>
        Follow
      </Button>



    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Disabled',
    `
      A button can show it is currently unable to be interacted with
    `,
    () => (


      <Button className='disabled'>
        Disabled
      </Button>



    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Loading',
    `
      A button can show a loading indicator
    `,
    () => (

      <div>
        <Button className='loading'/>
        <Button className='basic loading'/>
        <Button className='primary loading'/>
        <Button className='secondary loading'/>
      </div>

    ), {inline: true, propTables: [Button]})

storiesOf('Button Groups', module)
  .addWithInfo(
    'Icon Buttons Group',
    `
     Buttons can exist together as a group
    `,
    () => (

      <Buttons>
        <Button className='icon'>
          <Icon className='save'/>
        </Button>
        <Button className='icon'>
          <Icon className='delete'/>
        </Button>
        <Button className='icon'>
          <Icon className='edit'/>
        </Button>
      </Buttons>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Content Conditionals Group',
    `
     Button groups can contain conditionals
    `,
    () => (

      <Buttons>
        <Button>Cancel</Button>
        <div className='or'/>
        <Button className='positive'>Save</Button>
      </Buttons>

    ), {inline: true, propTables: [Button]})

storiesOf('Button Variation', module)
  .addWithInfo(
    'Social',
    `
      A button can show a loading indicator
    `,
    () => (

      <div>
        <Button className='facebook'>
          <Icon className='facebook'/>
          Facebook
        </Button>
        <Button className='twitter'>
          <Icon className='twitter'/>
          Twitter
        </Button>
        <Button className='google plus'>
          <Icon className='google plus'/>
          Google Plus
        </Button>
        <Button className='vk'>
          <Icon className='vk'/>
          VK
        </Button>
        <Button className='linkedin'>
          <Icon className='linkedin'/>
          LinkedIn
        </Button>
        <Button className='instagram'>
          <Icon className='instagram'/>
          Instagram
        </Button>
        <Button className='youtube'>
          <Icon className='youtube'/>
          YouTube
        </Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Size',
    `
      Buttons can have assorted sizes
    `,
    () => (

      <div>
        <Button className='mini'>
          Mini
        </Button>
        <Button className='tiny'>
          Tiny
        </Button>
        <Button className='small'>
          Small
        </Button>
        <Button className='medium'>
          Medium
        </Button>
        <Button className='large'>
          Large
        </Button>
        <Button className='big'>
          Big
        </Button>
        <Button className='huge'>
          Huge
        </Button>
        <Button className='massive'>
          Massive
        </Button>
      </div>
    ), {inline: true, propTables: [Button]})



  .addWithInfo(
    'Floated',
    `
      A button can be aligned to the left or right of its container

    `,
    () => (

      <div>
        <Button className='right floated'>Right Floated</Button>
        <Button className='left floated'>Left Floated</Button>
      </div>
    ), {inline: true, propTables: [Button]})



  .addWithInfo(
    'Colored',
    `
      A bittpm cam jave different colors

    `,
    () => (

      <div>
        <Button className='red'>Red</Button>
        <Button className='orange'>Orange</Button>
        <Button className='yellow'>Yellow</Button>
        <Button className='olive'>Olive</Button>
        <Button className='green'>Green</Button>
        <Button className='teal'>Teal</Button>
        <Button className='blue'>Blue</Button>
        <Button className='violet'>Violet</Button>
        <Button className='purple'>Purple</Button>
        <Button className='pink'>Pink</Button>
        <Button className='brown'>Brown</Button>
        <Button className='grey'>Grey</Button>
        <Button className='black'>Black</Button>
      </div>
    ), {inline: true, propTables: [Button]})


  .addWithInfo(
    'Compact',
    `
      Buttons can have reduced padding

    `,
    () => (

      <div>
        <Button className='compact'>Compact</Button>
        <Button>Normal</Button>
      </div>
    ), {inline: true, propTables: [Button]})



  .addWithInfo(
    'Toggle',
    `
      A button can be formatted to toggle on or off

    `,
    () => (

      <Button className='toggle'>Toggle</Button>
      // TODO: Need to add functionality for toggle button - See issue #43
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Positive/Negative',
    `
      A button can visually indicate consequences

    `,
    () => (

      <div>
        <Button className='positive'>Positive</Button>
        <Button className='negative'>Negative</Button>
      </div>
    ), {inline: true, propTables: [Button]})



  .addWithInfo(
    'Fluid',
    `
      A button can take the width of its container

    `,
    () => (

      <Button className='fluid'>Fits to Container</Button>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Circular',
    `
      A button can be circular

    `,
    () => (

      <Button className='circular icon'>
        <Icon className='heart' />
      </Button>
    ), {inline: true, propTables: [Button]})


  .addWithInfo(
    'Vertically Attached',
    `
      A button can be attached to the top or bottom of other content

    `,
    () => (

      <div>
        <Button className='top attached'>Top</Button>
        <Segment className='attached'>
          <p>Content goes here</p>
        </Segment>
        <Button className='bottom attached'>Bottom</Button>
      </div>
      // TODO: Extend button component to work with an attached div - see issue #46
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Horizontally Attached',
    `
      A button can be attached to the left or rightof other content

    `,
    () => (
      <div>
        <Button className='left attached'>Left</Button>
        <Button className='right attached'>Right</Button>
      </div>
    ), {inline: true, propTables: [Button]})


