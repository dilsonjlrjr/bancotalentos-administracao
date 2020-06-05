/* <tr>
<th scope="row">
  <span className="mb-0 text-sm">Programador Nível 1</span>
</th>

<td className="text-right"></td>
</tr> */

import React, { Fragment } from "react";
import { Table } from "reactstrap";

interface PropsTableOpenTalent {
  header: Array<String>;
  elements?: Array<any>;
}

interface StateTableOpenTalent {}

export default class TableOpenTalent extends React.Component<
  PropsTableOpenTalent,
  StateTableOpenTalent
> {
  render() {
    return (
      <Fragment>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              {this.props.header.map((value) => {
                return <th scope="col">{value}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.elements?.map((valueElement, index) => {
              let cell: any = Object.keys(valueElement).map((key: any) => {
                return <td>{valueElement[key]}</td>;
              });

              return <tr>{cell}</tr>;
            })}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}
