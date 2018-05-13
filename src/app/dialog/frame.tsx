import * as React from 'react';
import autobind from 'autobind-decorator';

import {OpenDialogContext} from './context';
import {DefaultDialog} from './defaultdialog';
import {DialogProps} from './dialogprops';

type DialogFrameProps = {
  Dialog?: React.ComponentClass<DialogProps> | React.StatelessComponent<DialogProps>
};

type DialogFrameState = {
  infoDialogOpen: boolean
  infoDialogHeadline?: string,
  infoDialogContent?: React.ReactElement<any>,
};

export class DialogFrame extends React.Component<DialogFrameProps, DialogFrameState> {
  public static defaultProps: Partial<DialogFrameProps> = {
    Dialog: DefaultDialog
  };
  constructor(props){
    super(props);
    this.state = {
      infoDialogOpen: true,
      infoDialogContent: <h2>Haha!</h2>
    };
  }
  @autobind
  public openDialog(title: string, elem: React.ReactElement<any>) {
    this.setState({
      infoDialogContent: elem,
      infoDialogHeadline: title,
      infoDialogOpen: true,
    });
  }
  @autobind
  closeDialog() {
    this.setState({infoDialogOpen: false});
  }
  render() {
    const Dialog = this.props.Dialog;
    return (
      <OpenDialogContext.Provider value={this.openDialog}>
        {this.props.children}
        <Dialog
          isOpen={this.state.infoDialogOpen}
          close={this.closeDialog}
          content={this.state.infoDialogContent}
          headline={this.state.infoDialogHeadline}
        />
      </OpenDialogContext.Provider>
    );
  }
}
