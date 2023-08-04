#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
{
    int index1 = m - 1;
    int index2 = n - 1;
    int merge_index = m + n - 1;

    while (index1 >= 0 && index2 >= 0)
    {
        if (nums1[index1] >= nums2[index2])
        {
            nums1[merge_index] = nums1[index1];
            index1--;
        }
        else
        {
            nums1[merge_index] = nums2[index2];
            index2--;
        }
        merge_index--;
    }

    while (index2 >= 0)
    {
        nums1[merge_index] = nums2[index2];
        index2--;
        merge_index--;
    }
}

int main()
{
    // Example usage:
    vector<int> nums1 = {1, 2, 3, 0, 0, 0}; // m = 3 (number of elements in nums1)
    vector<int> nums2 = {2, 5, 6};          // n = 3 (number of elements in nums2)

    merge(nums1, 3, nums2, 3);

    // Output merged and sorted nums1
    for (int num : nums1)
    {
        cout << num << " ";
    }
    // Output: 1 2 2 3 5 6

    return 0;
}
