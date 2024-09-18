import {Alert, FlatList, Platform, ToastAndroid, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Container, Loading} from '@atoms';
import {colors, fresh} from '@constants';
import {ItemPost, MenuPostSheet} from '@molecules';

type Props = {
  tab?: any;
};

const TabFresh = ({tab}: Props) => {
  if (tab !== 'Fresh') return null;

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
        data={fresh}
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
      />
      <MenuPostSheet menuRef={menuRef} onChangeMenu={handlerMenu} />
    </Container>
  );
};

export default TabFresh;
