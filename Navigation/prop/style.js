import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.5,
  },
  sceneContainer: {
    backgroundColor: 'transparent',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  drawerLabel: {
    flex: 1,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    position: 'absolute',
    right: 10,
    top: 100,
    width: '50%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  modalButton: {
    paddingVertical: 10,
  },
  dropdownContainer: {
    paddingHorizontal: 15,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    flex: 1,
  },
  dropdownMenu: {
    paddingLeft: 15,
    paddingVertical: 5,
  },
  dropdownItem: {
    paddingVertical: 10,
  },
});

export default styles;
