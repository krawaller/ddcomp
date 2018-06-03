import * as React from 'react';

import {Link} from 'react-router-dom';

type Path = string;
type Text = string;

type Crumb = [Path, Text];

type CrumbsProps = {
  crumbs: Crumb[]
}

export const Crumbs: React.StatelessComponent<CrumbsProps> = ({crumbs}) => (
  <div className="breadcrumbs">
    { 
      crumbs.map(([path, text]) => (
        <Link key={path} to={path}>{text}</Link>
      ))
    }
  </div>
);
