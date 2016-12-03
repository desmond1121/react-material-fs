/**
 * Created by desmond on 12/3/16.
 * @flow
 */
import React, { Component } from 'react';

type Props = {
  name : string
};

export default class File extends React.Component {
  
    constructor(props : Props) {
        super(props);
    }
    
    render() {
      return (
        <a className="waves-effect btn">
          File!
        </a>);
    }
}