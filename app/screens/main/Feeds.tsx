import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Container from 'components/Container';
import Styles from './Styles';
import usePosts, {TPost} from 'hooks/usePosts';
import PostCard from './components/PostCard';
import Loader from 'components/Loader';
import NoDataFound from 'components/NoDataFound';
import Button from 'components/Button';
import {useNavigation} from '@react-navigation/native';
import {CREATEPOST, LOGOUT} from 'constants/Icons';
import useUser from 'hooks/useUser';
import {lightTheme} from 'styles/FontsAndColor';

export const Feeds = () => {
  const {fetchPostsPaginated, post, isFetching, isRefreshing} = usePosts();
  const limit = 10;
  const {onUserLogout, loading} = useUser();
  const RenderPost = useCallback<ListRenderItem<TPost>>(
    ({item}: ListRenderItemInfo<TPost>) => {
      return <PostCard {...item} />;
    },
    [],
  );

  const onFetch = useCallback(
    (p: number, refreshing: boolean) => {
      fetchPostsPaginated(p, refreshing);
    },
    [fetchPostsPaginated],
  );

  const onRefresh = () => {
    onFetch(limit, true);
  };

  const onEndReach = () => {
    if (post && post.length >= 10) {
      onFetch(limit, false);
    }
  };
  const navigation = useNavigation();
  const onCreatePost = () => {
    navigation.navigate('create');
  };
  useEffect(() => {
    onFetch(limit, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={Styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <Button
            onPress={onUserLogout}
            icon={LOGOUT}
            iconType="svg"
            loading={loading}
            buttonStyle={Styles.logout}
          />
        }
        keyExtractor={(_, index) => index.toString()}
        data={post}
        refreshing={isRefreshing}
        ListFooterComponent={
          isFetching ? <Loader color={lightTheme.colors.btn_black} /> : <></>
        }
        ListEmptyComponent={<NoDataFound text="Not post found" />}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        renderItem={RenderPost}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReach}
      />
      <Button
        label=""
        icon={CREATEPOST}
        iconType="svg"
        onPress={onCreatePost}
        buttonStyle={Styles.fab}
      />
    </Container>
  );
};
