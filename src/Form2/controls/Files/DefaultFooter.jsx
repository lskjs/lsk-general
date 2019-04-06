import React from 'react';
import If from 'react-if';
import Button from '../../../Button';
import T from '../../../T';
import Box from './Box';
import File from './File';
import { Col, Row } from '../../../Grid';

const DefaultFooter = ({ value }) => (
  <If condition={Array.isArray(value) || value}>
    <Box paint="transparent">
      <Box.Header padded>
        <T name="lskComponents.filesCount" count={Array.isArray(value) ? value.length : 1} />
      </Box.Header>
      <Box.Body padded>
        <Row vertical gap={8}>
          {(Array.isArray(value) ? value : [value]).map((e, i) => (
            <Col key={i} xs={12} lg={4} sm={6} md={5} > {/* eslint-disable-line react/no-array-index-key */}
              <File url={e} item={i} value={value} />
            </Col>
          ))}
        </Row>
      </Box.Body>
    </Box>
  </If>
);

export default DefaultFooter;
