import {
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Container, Loading, NoData} from '@atoms';
import {colors, posting, verticalScale} from '@constants';
import {ItemPost, MenuPostSheet} from '@molecules';

type Props = {
  tab: any;
  onScroll?: any;
};

const TabHome = ({tab, onScroll}: Props) => {
  if (tab !== 'Home') return null;

  const menuRef = useRef<any>(null);
  const [refreshing, setrefreshing] = useState(false);
  const [loadMore, setloadMore] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const videoRef = useRef<any>({});

  const handlerMenu = (item: any) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(`${item.title} comming soon`, 200);
    } else {
      Alert.alert(`${item.title} comming soon`);
    }
  };

  const handlerRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      setrefreshing(false);
    }, 500);
  };
  const handlerLoadMore = () => {
    setloadMore(true);
    setTimeout(() => {
      setloadMore(false);
    }, 500);
  };
  const renderFooter = () => (!loadMore ? null : <Loading bordered />);

  const renderHeader = () => (!refreshing ? null : <Loading />);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: any[]}) => {
      viewableItems.forEach(item => {
        const index = item.index;
        const isViewable = item.isViewable;

        if (videoRef.current && videoRef.current[index]) {
          const videoElement = videoRef.current[index];

          if (isViewable && typeof videoElement.play === 'function') {
            videoElement.play();
          } else if (!isViewable && typeof videoElement.pause === 'function') {
            videoElement.pause();
          }
        }
      });
    },
  ).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({item, index}: any) => {
    return (
      <ItemPost
        key={index}
        videoRef={(ref: any) => {
          if (videoRef.current) {
            videoRef.current[index] = ref;
          }
        }}
        onEnterViewport={(isVisible: boolean) => {
          if (isVisible) {
            setVisibleIndex(index);
          }
        }}
        isVisible={visibleIndex === index}
        currentIndex={index}
        title={item.contentTitle}
        avatar={item.avatar}
        tags={item.tags}
        uploadAt={item.uploadAt}
        uploadBy={item.uploadBy}
        totalComment={item.totalComment}
        totalShare={item.totalShare}
        content={item.content}
        contentType={item.contentType}
        onMenu={() => menuRef.current.open()}
      />
    );
  };

  return (
    <Container>
      <FlatList
        onScroll={onScroll}
        contentContainerStyle={styles.scrolled}
        data={posting}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{height: 4, backgroundColor: colors.separator}} />
        )}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={handlerLoadMore}
        onRefresh={handlerRefresh}
        refreshing={false}
        progressViewOffset={-500}
        keyExtractor={(item: any, index: any) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        removeClippedSubviews
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
        getItemLayout={(data, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
        ListEmptyComponent={() => <NoData />}
      />

      <MenuPostSheet menuRef={menuRef} onChangeMenu={handlerMenu} />
    </Container>
  );
};

export default TabHome;

const styles = StyleSheet.create({
  scrolled: {
    paddingTop: verticalScale(90),
  },
});
