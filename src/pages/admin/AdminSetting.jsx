import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";

const initialSettings = {
  language: "BM",
  dataBackup: true,
  goDash: true,
  superController: true,
  smtp: true,
  editAuth: true,
  authorityLevel: "1",
  notification: true,
};


export default function AdminSetting() {
    const [settings, setSettings] = useState(initialSettings);
    const [openSections, setOpenSections] = useState({
        general: true,
        connect: false,
        email: false,
        auth: false,
        notification: false,
    });

    const toggleSection = (key) => {
        setOpenSections(prev => {
            return {...prev, [key]: !prev[key]};
        });
    }

    const handleChange = (field, value) => {
        setSettings(prev => {
            return {...prev, [field]: value};
        });
    }

    return (
        <BaseLayout>
            <main className="p-6 w-full max-w-2xl mx-auto font-serif bg-white" style={{zoom : 1.5}}>
                <h2 className="text-2xl mb-6 font-semibold text-center">Settings</h2>

                {/* General */}
                <div className="mb-4 border rounded shadow">
                    <div
                        className="bg-teal-400 px-4 py-2 cursor-pointer font-semibold flex justify-between items-center"
                        onClick={() => toggleSection("general")}
                    >
                        <span>General</span>
                        <span>{openSections.general ? "▲" : "▼"}</span>
                    </div>

                    {openSections.general && (
                        <div className="bg-gray-50 p-4 space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Language</span>
                                <span>
                                    <button
                                        className={`px-3 py-1 rounded font-bold mr-2 ${
                                        settings.language === "BM"
                                            ? "bg-black text-white"
                                            : "bg-gray-300"
                                        }`}
                                        onClick={() => handleChange("language", "BM")}
                                    >
                                        BM
                                    </button>
                                    <button
                                        className={`px-3 py-1 rounded font-bold ${
                                        settings.language === "BI"
                                            ? "bg-black text-white"
                                            : "bg-gray-300"
                                        }`}
                                        onClick={() => handleChange("language", "BI")}
                                    >
                                        BI
                                    </button>
                                </span>
                            </div>
                            <label className="flex justify-between items-center">
                                <span>Data Backup</span>
                                <input
                                    type="checkbox"
                                    checked={settings.dataBackup}
                                    onChange={(e) =>
                                        handleChange("dataBackup", e.target.checked)
                                    }
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* Connect To */}
                <div className="mb-4 border rounded shadow">
                    <div
                        className="bg-teal-400 px-4 py-2 cursor-pointer font-semibold flex justify-between items-center"
                        onClick={() => toggleSection("connect")}
                    >
                        <span>Connect To</span>
                        <span>{openSections.connect ? "▲" : "▼"}</span>
                    </div>
                    {openSections.connect && (
                        <div className="bg-gray-50 p-4 space-y-4">
                            <label className="flex justify-between items-center">
                                <span>GoDash</span>
                                <input
                                type="checkbox"
                                checked={settings.goDash}
                                onChange={(e) =>
                                    handleChange("goDash", e.target.checked)
                                }
                                />
                            </label>
                            <label className="flex justify-between items-center">
                                <span>SuperController</span>
                                <input
                                type="checkbox"
                                checked={settings.superController}
                                onChange={(e) =>
                                    handleChange("superController", e.target.checked)
                                }
                                />
                            </label>
                        </div>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4 border rounded shadow">
                    <div
                        className="bg-teal-400 px-4 py-2 cursor-pointer font-semibold flex justify-between items-center"
                        onClick={() => toggleSection("email")}
                    >
                        <span>Email</span>
                        <span>{openSections.email ? "▲" : "▼"}</span>
                    </div>
                    {openSections.email && (
                        <div className="bg-gray-50 p-4 space-y-4">
                        <label className="flex justify-between items-center">
                            <span>Enable SMTP</span>
                            <input
                            type="checkbox"
                            checked={settings.smtp}
                            onChange={(e) =>
                                handleChange("smtp", e.target.checked)
                            }
                            />
                        </label>
                        </div>
                    )}
                </div>

                {/* Authorization */}
                <div className="mb-4 border rounded shadow">
                    <div
                        className="bg-teal-400 px-4 py-2 cursor-pointer font-semibold flex justify-between items-center"
                        onClick={() => toggleSection("auth")}
                    >
                        <span>Authorization</span>
                        <span>{openSections.auth ? "▲" : "▼"}</span>
                    </div>
                    {openSections.auth && (
                        <div className="bg-gray-50 p-4 space-y-4">
                        <label className="flex justify-between items-center">
                            <span>Edit authorization</span>
                            <input
                            type="checkbox"
                            checked={settings.editAuth}
                            onChange={(e) =>
                                handleChange("editAuth", e.target.checked)
                            }
                            />
                        </label>
                        <label className="flex justify-between items-center">
                            <span>Authority Level</span>
                            <select
                            value={settings.authorityLevel}
                            onChange={(e) =>
                                handleChange("authorityLevel", e.target.value)
                            }
                            className="px-2 py-1 rounded"
                            >
                            <option value="1">Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            </select>
                        </label>
                        </div>
                    )}
                </div>

                {/* Notification */}
                <div className="mb-4 border rounded shadow">
                    <div
                        className="bg-teal-400 px-4 py-2 cursor-pointer font-semibold flex justify-between items-center"
                        onClick={() => toggleSection("notification")}
                    >
                        <span>Notification</span>
                        <span>{openSections.notification ? "▲" : "▼"}</span>
                    </div>
                    {openSections.notification && (
                        <div className="bg-gray-50 p-4 space-y-4">
                        <label className="flex justify-between items-center">
                            <span>Enable Notification</span>
                            <input
                            type="checkbox"
                            checked={settings.notification}
                            onChange={(e) =>
                                handleChange("notification", e.target.checked)
                            }
                            />
                        </label>
                        </div>
                    )}
                </div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded mt-4 block mx-auto"
                    onClick={() => alert("Settings saved!")}
                >
                    Save Settings
                </button>
            </main>
        </BaseLayout>
  );
}
