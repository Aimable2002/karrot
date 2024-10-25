import React, { useState, useMemo, useEffect  } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Chip } from 'react-native-paper'; // Ensure you have react-native-paper installed
// import React, { useState} from 'react';
import { getUserById } from '../service/userService';

const users = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", avatar: "https://example.com/alice.jpg" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", avatar: "https://example.com/bob.jpg" },
  { id: "3", name: "Charlie Brown", email: "charlie@example.com", avatar: "https://example.com/charlie.jpg" },
];

const ChatRoom = ({ conversations }) => {
  const [values, setValues] = useState(new Set(["1"]));

  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    const fetchUserNames = async () => {
      const names = {};
      for (const conv of conversations) {
        const otherUserId = conv.participants[1];
        if (!names[otherUserId]) {
          const user = await getUserById(otherUserId);
          names[otherUserId] = user?.name || 'Unknown User';
        }
      }
      setUserNames(names);
    };

    fetchUserNames();
  }, [conversations]);

  if (!conversations || conversations.length === 0) {
    return (
      <View style={styles.elseContainer}>
        <Text style={{marginBottom: 10}}>No conversation Yet started.</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Button title='Login' />
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Login')}>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }


  const arrayValues = Array.from(values);

  const toggleValue = (id) => {
    const newValues = new Set(values);
    if (newValues.has(id)) {
      newValues.delete(id);
    } else {
      newValues.add(id);
    }
    setValues(newValues);
  };

  const topContent = useMemo(() => {
    if (!arrayValues.length) {
      return null;
    }

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {arrayValues.map((value) => {
          const user = users.find((user) => `${user.id}` === `${value}`);
          return user ? <Chip key={value} onPress={() => toggleValue(value)}>{user.name}</Chip> : null;
        })}
      </ScrollView>
    );
  }, [arrayValues]);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.label}>Chat With </Text>
    //   <View style={styles.topContentContainer}>{topContent}</View>
    //   <FlatList
    //     data={users}
    //     keyExtractor={(item) => item.id}
    //     renderItem={({ item }) => (
    //       <TouchableOpacity style={styles.listItem}>
    //         <Text style={styles.name}>{item.name}</Text>
    //         <Text style={styles.email}>{item.email}</Text>
    //       </TouchableOpacity>
    //     )}
    //   />
    // </View>

    <View style={styles.container}>
  <Text style={styles.label}>Chat With</Text>
  <View style={styles.topContentContainer}>{topContent}</View>
  <FlatList
    data={conversations}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <TouchableOpacity style={styles.listItem} onPress={() => navigate(`/chat/${item.id}`)}>
        <View style={styles.userAvatar}>
          <Text style={styles.avatarText}>
            {userNames[item.participants[1]]?.split(' ').map(n => n[0]).join('') || '?'}
          </Text>
        </View>
        <View style={styles.flexOne}>
          <View style={styles.flexRow}>
            <Text style={styles.name}>{userNames[item.participants[1]] || 'Unknown'}</Text>
            <Text style={styles.timeText}>{item.updatedAt?.toDate().toLocaleString() || ''}</Text>
          </View>
          <Text style={styles.messageText}>
            {item.lastMessage || 'Click to view Message'}
          </Text>
        </View>
        {item.unreadCount > 0 && (
          <View style={styles.unreadCount}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    )}
  />
</View>

  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  elseContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  topContentContainer: {
    marginBottom: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userAvatar: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    color: '#FF7F50', // Change this to your desired color
    fontWeight: 'bold',
  },
  flexOne: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  timeText: {
    fontSize: 12,
    color: '#888',
  },
  messageText: {
    fontSize: 14,
    color: '#FF7F50', // Change this to your desired color
  },
  unreadCount: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadText: {
    fontSize: 12,
    color: '#FF7F50', // Change this to your desired color
  },
});


// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   scrollContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   topContentContainer: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   listItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   name: {
//     fontSize: 16,
//   },
//   email: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

export default ChatRoom;

