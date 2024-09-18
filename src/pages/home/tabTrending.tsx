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
import {ItemPost, MenuPostSheet} from '@molecules';
import {colors, trending} from '@constants';

type Props = {
  tab?: any;
};

const TabTrending = ({tab}: Props) => {
  if (tab !== 'Trending') return null;

  const menuRef = useRef<any>(null);
  const [refreshing, setrefreshing] = useState(false);
  const [loadMore, setloadMore] = useState(false);

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
  const renderFooter = () => (!loadMore ? null : <Loading />);

  const renderHeader = () => (!refreshing ? null : <Loading />);

  const renderItem = ({item, index}: any) => {
    return (
      <ItemPost
        key={index}
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
        data={trending}
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
        ListEmptyComponent={() => <NoData />}
      />
      <MenuPostSheet menuRef={menuRef} onChangeMenu={handlerMenu} />
    </Container>
  );
};

export default TabTrending;

const styles = StyleSheet.create({});
