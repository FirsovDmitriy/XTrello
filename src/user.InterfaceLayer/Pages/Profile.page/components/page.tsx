import { FC, useState } from 'react'
import Container from '../../../Library/main.library/UI-Kit/Container'
import Typography from '../../../Library/main.library/UI-Kit/Typography'
import Dropdowns from '../../../Library/main.library/UI-Kit/Dropdowns'
import Button from '../../../Library/main.library/UI-Kit/Buttons'
import Avatar from './Avatar'

const ProfilePage: FC = () => {

  const [show, setShow] = useState(false)

  return (
    <section>
      <Container className='grid grid-cols-[20rem_1fr] gap-12'>
        
        <Avatar />

        <div>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-4'>
              <Typography
                variant='title2'
                component='h2'
              >
                Marvin JWendt
              </Typography>
              <p>Active</p>
            </div>
            <Dropdowns
              onClose={() => setShow(false)}
            >
              <Dropdowns.Toggle>
                <Button
                  onClick={() => setShow(!show)}
                  variant='square'
                >
                  <i className='icon MoreVert-icon'></i>
                </Button>
              </Dropdowns.Toggle>
              <Dropdowns.Menu
                show={show}
                className='block w-56'
              >
                <Dropdowns.Item>
                  Edit
                </Dropdowns.Item>
                <Dropdowns.Item>
                  Change password
                </Dropdowns.Item>
                <Dropdowns.Item>
                  Look tasks user
                </Dropdowns.Item>
                <Dropdowns.Item>
                  <Button variant='text'>Delete</Button>
                </Dropdowns.Item>
              </Dropdowns.Menu>
            </Dropdowns>
          </div>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt id quos harum non? Architecto commodi quasi quo, voluptates voluptate ipsam esse exercitationem, repudiandae velit atque earum vitae voluptatem eveniet laborum?
          </Typography>
        </div>
      </Container>
    </section>
  )
}

export default ProfilePage