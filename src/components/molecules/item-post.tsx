import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, fonts, scale, verticalScale} from '@constants';
import {Avatar, FullImage, FullVideo, Icons, Texts} from '@atoms';
import {TouchableOpacity} from 'react-native';
import {Func} from '@utils';

type Props = {
  title?: string;
  avatar?: string;
  tags?: string[];
  uploadAt?: string;
  uploadBy?: string;
  totalComment?: string;
  totalShare?: string;
  content?: string;
  contentType?: 'text' | 'image' | 'video' | 'gif';
  onMenu?: () => void;
  videoRef?: any;
  onEnterViewport?: (item: boolean) => void;
  currentIndex?: any;
  isVisible?: boolean;
};

const ItemPost = ({
  title = '',
  avatar = '',
  tags = [],
  uploadAt = '',
  uploadBy = '',
  totalComment = '',
  totalShare = '',
  content = '',
  contentType,
  videoRef,
  onEnterViewport,
  onMenu = () => {},
  currentIndex,
  isVisible,
}: Props) => {
  const renderContentBody = () => {
    switch (contentType) {
      case 'text':
        return null;
      case 'image':
        return <FullImage resizeMode="contain" uri={content} />;
      case 'video':
        return (
          <FullVideo
            onEnterViewport={onEnterViewport}
            isVisible={isVisible}
            videoRef={videoRef}
            resizeMode="contain"
            uri={content}
            currentIndex={currentIndex}
          />
        );
      case 'gif':
        return null;

      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.userInfoContainer}>
          <Avatar size={40} uri={avatar} />
          <View style={styles.uploadInfoContainer}>
            {uploadBy && <Texts style={styles.uploadByText}>{uploadBy}</Texts>}
            <Texts>{' . '}</Texts>
            <Texts>{Func.formatDate(uploadAt)}</Texts>
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={onMenu}>
          <Icons
            type="MaterialCommunityIcons"
            name="dots-horizontal"
            size={fonts.size.font22}
            color={colors.textDefault}
          />
        </TouchableOpacity>
      </View>

      <View>
        {title && <Texts style={styles.titleText}>{title}</Texts>}

        {renderContentBody()}

        <View style={styles.contentContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <View style={styles.sawerContainer}>
              <Icons
                name="monetization-on"
                color={'#FFF'}
                size={fonts.size.font14}
              />
              <Texts style={styles.sawerText}>Sawer</Texts>
            </View>

            {tags?.length > 0 &&
              tags.map((tag: any, index: any) => (
                <View key={index} style={styles.tagContainer}>
                  <Texts style={styles.tagText}>#{tag}</Texts>
                </View>
              ))}
          </ScrollView>

          <View style={styles.footerContainer}>
            <View style={styles.interactionContainer}>
              <View style={styles.voteContainer}>
                <View style={styles.voteUpContainer}>
                  <Icons
                    type="MaterialCommunityIcons"
                    name="arrow-up-bold-outline"
                    size={fonts.size.font18}
                  />
                  <Texts style={styles.voteText}>{totalShare}</Texts>
                </View>
                <View style={styles.voteDownContainer}>
                  <Icons
                    type="MaterialCommunityIcons"
                    name="arrow-down-bold-outline"
                    size={fonts.size.font18}
                  />
                </View>
              </View>
              <View style={styles.commentContainer}>
                <View style={styles.commentContentContainer}>
                  <Icons
                    type="MaterialCommunityIcons"
                    name="message-text-outline"
                    size={fonts.size.font16}
                  />
                  <Texts style={styles.commentText}>{totalComment}</Texts>
                </View>
              </View>
            </View>

            <View style={styles.shareContainer}>
              <Icons
                type="MaterialCommunityIcons"
                name="share-outline"
                size={fonts.size.font24}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: scale(10),
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadInfoContainer: {
    marginLeft: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadByText: {
    fontFamily: fonts.type.poppinsSemiBold,
  },
  titleText: {
    fontFamily: fonts.type.poppinsMedium,
    paddingHorizontal: scale(10),
  },
  contentContainer: {
    marginVertical: verticalScale(10),
  },
  scrollContainer: {
    zIndex: 99,
    paddingHorizontal: scale(10),
  },
  sawerContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginHorizontal: scale(1),
    marginRight: 8,
    borderRadius: 50,
    paddingHorizontal: scale(6),
    backgroundColor: '#ea9100',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sawerText: {
    fontFamily: fonts.type.poppinsMedium,
    color: '#FFF',
    marginLeft: 5,
  },
  tagContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginHorizontal: scale(1),
    borderRadius: 50,
    paddingHorizontal: scale(6),
  },
  tagText: {
    fontFamily: fonts.type.poppinsMedium,
  },
  footerContainer: {
    marginTop: verticalScale(10),
    marginHorizontal: scale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    marginRight: 8,
    height: scale(25),
  },
  voteUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
  },
  voteText: {
    fontFamily: fonts.type.poppinsMedium,
    marginBottom: -5,
    marginHorizontal: 5,
  },
  voteDownContainer: {
    borderLeftWidth: 1,
    borderColor: colors.borderColor,
    paddingHorizontal: scale(8),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    height: scale(25),
  },
  commentContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
  },
  commentText: {
    fontFamily: fonts.type.poppinsMedium,
    fontSize: fonts.size.font14,
    marginHorizontal: 5,
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: scale(4),
    alignSelf: 'flex-end',
    height: scale(25),
  },
});
