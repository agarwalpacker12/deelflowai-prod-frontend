import React, { useEffect, useState } from "react";
import StaticComponent from "./StaticComponent";
import MainContentWrapper from "../../components/Layout/MainContentWrapper";
import { RbacAPI } from "../../services/api";
import { useMutation } from "@tanstack/react-query";

const RoleManagementPage = () => {
  const [permissionState, setPermissionState] = useState();
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const [selectedRoleId, setSelectedRoleId] = useState(null);

  // Get unique roles for table headers (sorted by ID)
  // const getRoles = () => {
  //   if (!permissionState?.permission_groups?.[0]?.permissions?.[0]?.roles)
  //     return [];
  //   return permissionState.permission_groups[0].permissions[0].roles.sort(
  //     (a, b) => a.id - b.id
  //   );
  // };

  // const roles = getRoles();

  // Load initial data from props (only when it changes)
  useEffect(() => {
    if (selectedPermissions?.length) {
      // Clone to avoid direct prop mutation
      setPermissions([...selectedPermissions]);
    }
  }, [selectedPermissions]);

  // Handle checkbox toggle
  const handleToggle = (id) => {
    setPermissions((prev) =>
      prev.map((perm) =>
        perm.id === id ? { ...perm, status: !perm.status } : perm
      )
    );
  };

  console.log("permission101", permissions);

  // 🧭 API: Update Role Mutation
  const mutation = useMutation({
    mutationFn: async ({ roleId, data }) => {
      const res = await RbacAPI.UpdatePermission(roleId, data);
      return res;
    },
    onSuccess: (response) => {
      if (response.data.status === "success") {
        alert(response.data.message || "Role updated successfully!");
      } else {
        throw new Error(response.data.message || "Failed to update role");
      }
    },
    onError: (error) => {
      console.error("Error updating role:", error);
      alert(
        error.response?.data?.message ||
          error.message ||
          "An error occurred while updating the role"
      );
    },
  });

  // 🧾 Form submit
  const onSubmit = () => {
    if (!selectedRoleId) {
      alert("Please select a role first");
      return;
    }

    // Use the permissions state which has the updated checkbox values
    const formData = {
      permissions: permissions.map((perm) => ({
        id: perm.id,
        name: perm.name,
        label: perm.label,
        status: perm.status,
      })),
    };

    mutation.mutate({ roleId: selectedRoleId, data: formData });
  };

  return (
    <MainContentWrapper>
      <div className="max-w-7xl mx-auto space-y-8">
        <StaticComponent
          setSelectedPermissions={setSelectedPermissions}
          setSelectedRoleId={setSelectedRoleId}
        />

        {/* Granular Permission Management */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">
              Granular Permission Management
            </h2>

            <button onClick={() => onSubmit()} className="bg-slate-500 p-2">
              Update
            </button>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/10 border-b border-white/10">
                  <tr>
                    <th className="text-left text-white p-4 font-semibold">
                      Permission Name
                    </th>
                    <th className="text-left text-white p-4 font-semibold">
                      Label
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPermissions?.map((perm) => (
                    <tr
                      key={perm.id}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 text-slate-200">
                        <input
                          type="checkbox"
                          checked={!!perm.status}
                          onChange={() => handleToggle(perm.id)}
                          className="mx-4 accent-blue-500 cursor-pointer"
                        />
                        {perm?.name}
                      </td>
                      <td className="p-4 text-slate-300">{perm?.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MainContentWrapper>
  );
};

export default RoleManagementPage;
