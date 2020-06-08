import React, { Fragment } from "react";
import HeaderDefault from "components/Headers/HeaderDefault";

interface PropsNewOpportunity {}
interface StateNewOpportunity {}

export default class NewOpportunity extends React.Component<
  PropsNewOpportunity,
  StateNewOpportunity
> {
  render() {
    const description: string = "";
    return (
      <Fragment>
        <HeaderDefault
          title="Criando nova oportunidade"
          description={description}
        />
      </Fragment>
    );
  }
}
