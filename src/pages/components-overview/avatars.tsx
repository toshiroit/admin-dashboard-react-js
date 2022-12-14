// material-ui
import { AvatarGroup, Badge, Grid } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import Avatar from 'components/@extended/Avatar';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';
import ComponentSkeleton from 'sections/components-overview/ComponentSkeleton';

// assets
import {
  CheckOutlined,
  DatabaseFilled,
  DeleteFilled,
  InfoCircleFilled,
  PlusOutlined,
  UserOutlined,
  WarningFilled,
  ZoomInOutlined,
  ZoomOutOutlined
} from '@ant-design/icons';

const avatarImage = require.context('assets/images/users', true);

// ==============================|| COMPONENTS - AVATAR ||============================== //

const ComponentAvatar = () => {
  const basicAvatarCodeString = `<Avatar alt="Basic"><UserOutlined /></Avatar>`;

  const imageAvatarCodeString = `<Avatar alt="Avatar 1" src={avatarImage('./avatar-1.png').default} />
<Avatar alt="Avatar 2" src={avatarImage('./avatar-2.png').default} />
<Avatar alt="Avatar 3" src={avatarImage('./avatar-3.png').default} />
<Avatar alt="Avatar 4" src={avatarImage('./avatar-4.png').default} />`;

  const vectorAvatarCodeString = `<Avatar><img alt="Natacha" src={avatarImage('./vector-1.png').default} height={40} /></Avatar>
<Avatar><img alt="Natacha" src={avatarImage('./vector-2.png').default} height={40} /></Avatar>
<Avatar><img alt="Natacha" src={avatarImage('./vector-3.png').default} height={40} /></Avatar>
<Avatar><img alt="Natacha" src={avatarImage('./vector-4.png').default} height={40} /></Avatar>`;

  const letterAvatarCodeString = `<Avatar alt="Natacha" size="sm">U</Avatar>
<Avatar color="error" alt="Natacha" size="sm">UI</Avatar>
<Avatar color="error" type="filled" alt="Natacha" size="sm">A</Avatar>`;

  const variantsAvatarCodeString = `<Avatar alt="Natacha"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="rounded" type="combined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="square" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Natacha">U</Avatar>
<Avatar alt="Natacha" variant="rounded" type="combined">U</Avatar>
<Avatar alt="Natacha" variant="square" type="filled">U</Avatar>`;

  const outlinedAvatarCodeString = `<Avatar alt="Natacha" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="rounded" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="square" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" type="outlined">U</Avatar>
<Avatar alt="Natacha" variant="rounded" type="outlined">U</Avatar>
<Avatar alt="Natacha" variant="square" type="outlined">U</Avatar>`;

  const iconAvatarCodeString = `<Avatar alt="Natacha" size="sm" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Natacha" size="sm" type="filled" color="success"><ZoomInOutlined /></Avatar>
<Avatar alt="Natacha" size="sm" type="filled" color="error"><ZoomOutOutlined /></Avatar>
<Avatar alt="Natacha" size="sm"><PlusOutlined /></Avatar>`;

  const groupAvatarCodeString = `<AvatarGroup max={4}>
  <Avatar alt="Remy Sharp" src={avatarImage('./avatar-1.png').default} />
  <Avatar alt="Travis Howard" src={avatarImage('./avatar-2.png').default} />
  <Avatar alt="Cindy Baker" src={avatarImage('./avatar-3.png').default} />
  <Avatar alt="Agnes Walker" src={avatarImage('./avatar-4.png').default} />
  <Avatar alt="Trevor Henderson" src={avatarImage('./avatar-5.png').default} />
</AvatarGroup>`;

  const badgeAvatarCodeString = `<Badge badgeContent={4} color="error" overlap="circular">
  <Avatar alt="Natacha" type="filled" src={avatarImage('./avatar-6.png').default} />
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar alt="Natacha" color="secondary" type="filled">
    <UserOutlined />
  </Avatar>
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar alt="Natacha" type="filled" src={avatarImage('./avatar-2.png').default} />
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar alt="Natacha" type="outlined">
    U
  </Avatar>
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar>
    <img alt="Natacha" src={avatarImage('./vector-2.png').default} width={40} />
  </Avatar>
</Badge>
<Badge color="success" variant="dot">
  <Avatar alt="Natacha" variant="rounded" type="filled" src={avatarImage('./avatar-1.png').default} />
</Badge>
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={<Avatar size="badge" alt="Remy Sharp" src={avatarImage('./avatar-6.png').default} />}
>
  <Avatar alt="Travis Howard" src={avatarImage('./avatar-1.png').default} />
</Badge>`;

  const sizesAvatarCodeString = `<Avatar size="xs" alt="Avatar 1" src={avatarImage('./avatar-1.png').default} />
<Avatar size="xl" alt="Avatar 5" src={avatarImage('./avatar-5.png').default} />
<Avatar size="lg" alt="Avatar 4" src={avatarImage('./avatar-4.png').default} />
<Avatar size="md" alt="Avatar 3" src={avatarImage('./avatar-3.png').default} />
<Avatar size="sm" alt="Avatar 2" src={avatarImage('./avatar-2.png').default} />`;

  const colorsAvatarCodeString = `<Avatar alt="Basic" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Basic" type="filled" color="error"><DeleteFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="info"><InfoCircleFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="warning"><WarningFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="success"><CheckOutlined /></Avatar>
<Avatar alt="Basic" type="filled" color="secondary"><DatabaseFilled /></Avatar>`;

  const fallbacksAvatarCodeString = `<Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="filled">B</Avatar>
<Avatar src="/broken-image.jpg" color="error" />
<Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="outlined" />`;

  return (
    <ComponentSkeleton>
      <ComponentHeader
        title="Avatar"
        caption="Avatars are found throughout material design with uses in everything from tables to dialog menus."
        directory="src/pages/components-overview/avatars"
        link="https://mui.com/material-ui/react-avatar/"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MainCard title="Basic" codeHighlight codeString={basicAvatarCodeString}>
              <Avatar alt="Basic">
                <UserOutlined />
              </Avatar>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Image" codeString={imageAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Avatar 1" src={avatarImage(`./avatar-1.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar alt="Avatar 2" src={avatarImage(`./avatar-2.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar alt="Avatar 3" src={avatarImage(`./avatar-3.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar alt="Avatar 4" src={avatarImage(`./avatar-4.png`).default} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Vector" codeString={vectorAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar>
                    <img alt="Natacha" src={avatarImage(`./vector-1.png`).default} height={40} />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>
                    <img alt="Natacha" src={avatarImage(`./vector-2.png`).default} height={40} />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>
                    <img alt="Natacha" src={avatarImage(`./vector-3.png`).default} height={40} />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar>
                    <img alt="Natacha" src={avatarImage(`./vector-4.png`).default} height={40} />
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Letter" codeString={letterAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Natacha" size="sm">
                    U
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="error" alt="Natacha" size="sm">
                    UI
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar color="error" type="filled" alt="Natacha" size="sm">
                    A
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Variants" codeString={variantsAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Natacha">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="rounded" type="combined">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="square" type="filled">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha">U</Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="rounded" type="combined">
                    U
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="square" type="filled">
                    U
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Outlined" codeString={outlinedAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Natacha" type="outlined">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="rounded" type="outlined">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="square" type="outlined">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" type="outlined">
                    U
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="rounded" type="outlined">
                    U
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" variant="square" type="outlined">
                    U
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Icon" codeString={iconAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Natacha" size="sm" type="filled">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" size="sm" type="filled" color="success">
                    <ZoomInOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" size="sm" type="filled" color="error">
                    <ZoomOutOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Natacha" size="sm">
                    <PlusOutlined />
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Avatar Group" codeString={groupAvatarCodeString}>
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={avatarImage(`./avatar-1.png`).default} />
                <Avatar alt="Travis Howard" src={avatarImage(`./avatar-2.png`).default} />
                <Avatar alt="Cindy Baker" src={avatarImage(`./avatar-3.png`).default} />
                <Avatar alt="Agnes Walker" src={avatarImage(`./avatar-4.png`).default} />
                <Avatar alt="Trevor Henderson" src={avatarImage(`./avatar-5.png`).default} />
              </AvatarGroup>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="With Badge" codeString={badgeAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Badge badgeContent={4} color="error" overlap="circular">
                    <Avatar alt="Natacha" type="filled" src={avatarImage(`./avatar-6.png`).default} />
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge color="error" overlap="circular" variant="dot">
                    <Avatar alt="Natacha" color="secondary" type="filled">
                      <UserOutlined />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge color="error" overlap="circular" variant="dot">
                    <Avatar alt="Natacha" type="filled" src={avatarImage(`./avatar-2.png`).default} />
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge color="error" overlap="circular" variant="dot">
                    <Avatar alt="Natacha" type="outlined">
                      U
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge color="error" overlap="circular" variant="dot">
                    <Avatar>
                      <img alt="Natacha" src={avatarImage(`./vector-2.png`).default} width={40} />
                    </Avatar>
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge color="success" variant="dot">
                    <Avatar alt="Natacha" variant="rounded" type="filled" src={avatarImage(`./avatar-1.png`).default} />
                  </Badge>
                </Grid>
                <Grid item>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={<Avatar size="badge" alt="Remy Sharp" src={avatarImage(`./avatar-6.png`).default} />}
                  >
                    <Avatar alt="Travis Howard" src={avatarImage(`./avatar-1.png`).default} />
                  </Badge>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Sizes" codeString={sizesAvatarCodeString}>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar size="xs" alt="Avatar 1" src={avatarImage(`./avatar-1.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar size="sm" alt="Avatar 2" src={avatarImage(`./avatar-2.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar size="md" alt="Avatar 3" src={avatarImage(`./avatar-3.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar size="lg" alt="Avatar 4" src={avatarImage(`./avatar-4.png`).default} />
                </Grid>
                <Grid item>
                  <Avatar size="xl" alt="Avatar 5" src={avatarImage(`./avatar-5.png`).default} />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Colors" codeString={colorsAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Basic" type="filled">
                    <UserOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Basic" type="filled" color="secondary">
                    <DatabaseFilled />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Basic" type="filled" color="success">
                    <CheckOutlined />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Basic" type="filled" color="warning">
                    <WarningFilled />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Basic" type="filled" color="info">
                    <InfoCircleFilled />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Basic" type="filled" color="error">
                    <DeleteFilled />
                  </Avatar>
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MainCard title="Fallbacks" codeString={fallbacksAvatarCodeString}>
              <Grid container spacing={1}>
                <Grid item>
                  <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="filled">
                    B
                  </Avatar>
                </Grid>
                <Grid item>
                  <Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="outlined" />
                </Grid>
                <Grid item>
                  <Avatar src="/broken-image.jpg" color="error" />
                </Grid>
              </Grid>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </ComponentSkeleton>
  );
};

export default ComponentAvatar;
