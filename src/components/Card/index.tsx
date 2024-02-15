import { Specialist } from '@/store/types';
import * as styles from './styles';
import { convertTimestampToHours, formatTimeIntl } from '@/helpers';
import avatarMale from '@assets/avatar-male.png';
import avatarFemale from '@assets/avatar-female.png';

const Card = ({
  name,
  age,
  rating,
  defaultSubjectName,
  subjectsCount,
  onlineStatus,
  lastActivityTime,
  photoUrl,
  sex,
}: Specialist) => {
  const isSubjectCount = Boolean(subjectsCount);
  const subjectCountText = isSubjectCount ? ` и еще ${subjectsCount}` : '';
  const isMaleText = sex === 1 ? 'Был ' : 'Была ';
  const ratingText = rating > 0 ? rating : 'NEW';
  const isOnline = onlineStatus === 2 ? true : false;
  const isMale = sex === 1 ? true : false;
  const isAvatarExists = photoUrl !== null || String(photoUrl).length > 0;
  const genderAvatar = !isAvatarExists && isMale ? avatarMale : avatarFemale;

  return (
    <div css={styles.card}>
      <div css={styles.cardRating}>
        <p css={styles.ratingTextStyle}>Рейтинг</p> <p css={styles.ratingNumberStyle}>{ratingText}</p>
      </div>
      <img src={isAvatarExists ? photoUrl : genderAvatar} alt="profile" css={styles.cardImage} />
      <div css={styles.cardInfo}>
        <div css={styles.onlineIndicatorContainer}>
          <p css={styles.cardName}>
            {name}, {age}
          </p>
          {isOnline && <div css={styles.onlineIndicator} />}
        </div>
        <p css={styles.cardTopics}>
          {`${defaultSubjectName}`}
          <span>{subjectCountText}</span>
        </p>
        {!isOnline && (
          <p css={styles.cardTime}>
            {isMaleText}
            {formatTimeIntl(convertTimestampToHours(lastActivityTime))}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
