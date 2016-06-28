import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Progress from './Progress';
import {Segment} from 'stardust';

{/*
 import MasterLayout from '../layouts/masterLayout';

 */
}
storiesOf('Progress', module)

  .addWithInfo(
    'Standard',
    `
     A standard progress bar
    `,
    () => (
      <div>
        <Progress completed={26}></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Indicating',
    `
    ~~~
    TODO: indicating behavior not implemented yet
    ~~~
     An indicating progress bar visually indicates the current level of progress of a task
    `,
    () => (
      <div>
        <Progress completed={26} className="indicating"></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})

storiesOf('Progress States', module)
  .addWithInfo(
    'Success',
    `
      A progress bar can show a success state

    `,
    () => (
      <div>
        <Progress completed={26} className="success"></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})
  .addWithInfo(
    'Warning',
    `
      A progress bar can show a warning state

    `,
    () => (
      <div>
        <Progress completed={26} className="warning"></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})
  .addWithInfo(
    'Error',
    `
      A progress bar can show a error state

    `,
    () => (
      <div>
        <Progress completed={26} className="error"></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Disabled',
    `
      A progress bar can be disabled

    `,
    () => (
      <div>
        <Progress completed={26} className="disabled"></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})

storiesOf('Progress Variations', module)

  .addWithInfo(
    'Inverted',
    `
      A progress bar can have its colors inverted
    `,
    () => (
      <Segment className="inverted">
        <Progress completed={25} className="inverted"></Progress>
        <Progress completed={50} className="inverted success"></Progress>
        <Progress completed={75} className="inverted warning"></Progress>
        <Progress completed={100} className="inverted error "></Progress>
      </Segment>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Size',
    `
      A progress bar can vary in size
    `,
    () => (
      <div>
        <Progress completed={30} className="tiny blue"></Progress>
        <Progress completed={40} className="small blue"></Progress>
        <Progress completed={50} className="blue"></Progress>
        <Progress completed={60} className="large blue"></Progress>
        <Progress completed={70} className="big blue "></Progress>
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Color',
    `
      A progress bar can have different colors
    `,
    () => (
      <div>
        <Progress completed={30} className="red">
        </Progress>
        <Progress completed={40} className="orange">
        </Progress>
        <Progress completed={50} className="yellow">
        </Progress>
        <Progress completed={60} className="olive">
        </Progress>
        <Progress completed={70} className="green">
        </Progress>
        <Progress completed={60} className="teal">
        </Progress>
        <Progress completed={50} className="blue">
        </Progress>
        <Progress completed={40} className="violet">
        </Progress>
        <Progress completed={30} className="purple">
        </Progress>
        <Progress completed={40} className="pink">
        </Progress>
        <Progress completed={50} className="brown">
        </Progress>
        <Progress completed={60} className="grey">
        </Progress>
        <Progress completed={70} className="black">
        </Progress>
      </div>



    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Inverted Color',
    `
      The colors can also be inverted for improved contrast on dark backgrounds

    `,
    () => (
      <Segment className="inverted">
        <Progress completed={30} className="inverted red">
        </Progress>
        <Progress completed={40} className="inverted orange">
        </Progress>
        <Progress completed={50} className="inverted yellow">
        </Progress>
        <Progress completed={60} className="inverted olive">
        </Progress>
        <Progress completed={70} className="inverted green">
        </Progress>
        <Progress completed={60} className="inverted teal">
        </Progress>
        <Progress completed={50} className="inverted blue">
        </Progress>
        <Progress completed={40} className="inverted violet">
        </Progress>
        <Progress completed={30} className="inverted purple">
        </Progress>
        <Progress completed={40} className="inverted pink">
        </Progress>
        <Progress completed={50} className="inverted brown">
        </Progress>
        <Progress completed={60} className="inverted grey">
        </Progress>
        <Progress completed={70} className="inverted black">
        </Progress>
      </Segment>



    ), {inline: true, propTables: [Progress]})


