import { FC, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Video from 'yet-another-react-lightbox/plugins/video';

import image1 from 'assets/merchcyop.png'
import image2 from 'assets/unftmodule.png'

const Home: FC = () => {
  const [open, setOpen] = useState(false);
  return <>
    <button type='button' onClick={() => setOpen(true)}>
      Open Lightbox
    </button>

    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[
        { src: image1 },
        { src: image2 },
        {
          type: 'video',
          width: 1280,
          height: 720,
          poster: '/public/poster-image.jpg',
          sources: [
            {
              src: 'https://www.youtube.com/watch?v=XO0TL2fvtV4',
              type: 'video/mp4'
            }
          ]
        }
      ]}
      plugins={[Video]}
    />
  </>
}

export default Home
