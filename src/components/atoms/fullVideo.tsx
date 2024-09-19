import React, {memo, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import Icons from './icons';
import Texts from './texts';

const {width, height} = Dimensions.get('window');

type Props = {
  uri: string;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  videoRef?: any;
  onEnterViewport?: (isVisible: boolean) => void;
  isVisible?: boolean;
  currentIndex?: any;
};

const FullVideo = ({
  videoRef,
  onEnterViewport,
  isVisible,
  uri,
  resizeMode = 'cover',
  currentIndex,
  ...props
}: Props) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMuteToggle = () => setIsMuted(!isMuted);
  const handlePauseToggle = () => setIsPaused(!isPaused);
  const handleFullscreenToggle = () => setIsFullscreen(!isFullscreen);

  useEffect(() => {
    setIsPaused(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (videoRef?.current) {
      if (isFullscreen) {
        videoRef.current.presentFullscreenPlayer();
      } else {
        videoRef.current.dismissFullscreenPlayer();
      }
    }
  }, [isFullscreen]);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handlePauseToggle}>
      <Video
        ref={r => {
          if (videoRef.current) {
            videoRef.current[currentIndex] = r;
          }
        }}
        source={{uri}}
        style={styles.video}
        muted={isMuted}
        paused={isPaused}
        resizeMode={resizeMode}
        onBuffer={() => setIsBuffering(true)}
        onReadyForDisplay={() => setIsBuffering(false)}
        fullscreen={isFullscreen}
        fullscreenAutorotate
        repeat
        {...props}
      />

      {/* {isBuffering && <Texts style={styles.bufferingText}>Buffering...</Texts>} */}

      <TouchableOpacity style={styles.muteButton} onPress={handleMuteToggle}>
        <Icons
          type="Ionicons"
          name={isMuted ? 'volume-mute-outline' : 'volume-medium-outline'}
          color="white"
          size={24}
        />
      </TouchableOpacity>

      {isPaused && (
        <View style={styles.playOverlay}>
          <Icons type="Ionicons" name="play" size={20} color="white" />
        </View>
      )}

      <TouchableOpacity
        style={styles.fullscreenButton}
        onPress={handleFullscreenToggle}>
        <Icons
          type="Ionicons"
          name={isFullscreen ? 'contract' : 'expand'}
          color="white"
          size={24}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: width * 1.2,
    backgroundColor: 'black',
  },
  fullscreenContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  fullscreenVideo: {
    width: width,
    height: height,
  },

  bufferingText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  playOverlay: {
    position: 'absolute',
    top: '55%',
    left: '55%',
    transform: [{translateX: -50}, {translateY: -50}],
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
  },
  muteButton: {
    position: 'absolute',
    bottom: 60,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  fullscreenButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
});

export default memo(FullVideo);
