import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <div>
      <a href={story.url}>
        <p>{story.title}</p>
      </a>
      BY: <p>{story.by}</p>
      Posted : <p>{story.time}</p>
    </div>
  ) : null;
};

export default Story;
