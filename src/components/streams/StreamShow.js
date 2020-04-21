import React, { useEffect, useRef } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

const StreamShow = props => {
  const videoRef = useRef();
  const player = useRef();

  useEffect(() => {
    const { id } = props.match.params;

    props.fetchStream(id);
    buildPlayer();
    return () => {
      player.current.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    buildPlayer();
  });

  const buildPlayer = () => {
    if (player.current || !props.stream) {
      return;
    }

    const { id } = props.match.params;
    player.current = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    player.current.attachMediaElement(videoRef.current);
    player.current.load();
  };

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  const { title, description } = props.stream;

  return (
    <div>
      <video ref={videoRef} style={{ width: '100%' }} controls />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
