import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:tiktok_clone/constants/gaps.dart';
import 'package:tiktok_clone/constants/sizes.dart';

class UserProfileScreen extends StatefulWidget {
  const UserProfileScreen({super.key});

  @override
  State<UserProfileScreen> createState() => _UserProfileScreenState();
}

class _UserProfileScreenState extends State<UserProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return CustomScrollView(slivers: [
      SliverAppBar(
        title: const Text('Bilkahyr❤️'),
        actions: [
          IconButton(
            onPressed: () {},
            icon: const FaIcon(FontAwesomeIcons.gear, size: 20),
          ),
        ],
      ),
      SliverToBoxAdapter(
          child: Column(
        children: [
          const CircleAvatar(
            radius: 45,
            foregroundColor: Colors.teal,
            foregroundImage: NetworkImage(
                "https://www.vmcdn.ca/f/files/via/images/arts/soft-girl-thumb.jpg;w=1080;h=885;mode=crop"),
            child: Text('Bilkahyr❤️'),
          ),
          Gaps.v20,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                '@Bilkahyr',
                style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 18,
                ),
              ),
              Gaps.h5,
              FaIcon(
                FontAwesomeIcons.solidCircleCheck,
                size: Sizes.size16,
                color: Colors.blue.shade500,
              )
            ],
          ),
          Gaps.v24,
          SizedBox(
            height: Sizes.size48,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Column(
                  children: [
                    const Text(
                      "97",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: Sizes.size16,
                      ),
                    ),
                    Gaps.v5,
                    Text(
                      "Following",
                      style: TextStyle(
                        color: Colors.grey.shade500,
                      ),
                    )
                  ],
                ),
                const VerticalDivider(
                  width: Sizes.size32,
                  thickness: Sizes.size1,
                  indent: Sizes.size10,
                  endIndent: Sizes.size10,
                ),
                Column(
                  children: [
                    const Text(
                      "18.2M",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: Sizes.size16,
                      ),
                    ),
                    Gaps.v5,
                    Text(
                      "Followers",
                      style: TextStyle(
                        color: Colors.grey.shade500,
                      ),
                    )
                  ],
                ),
                const VerticalDivider(
                  width: Sizes.size32,
                  thickness: Sizes.size1,
                  indent: Sizes.size10,
                  endIndent: Sizes.size10,
                ),
                Column(
                  children: [
                    const Text(
                      "20.2M",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: Sizes.size16,
                      ),
                    ),
                    Gaps.v5,
                    Text(
                      "Likes",
                      style: TextStyle(
                        color: Colors.grey.shade500,
                      ),
                    )
                  ],
                )
              ],
            ),
          )
        ],
      )),
    ]);
  }
}
