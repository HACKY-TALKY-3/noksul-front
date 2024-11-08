export function getWamData(key) {
    if (typeof window.ChannelIOWam.getWamData === 'function') {
        return window.ChannelIOWam.getWamData(key);
    }
    return undefined;
}

export function close(appId, name, params) {
    if (typeof window.ChannelIOWam.close === 'function') {
        if (appId && name) {

            return window.ChannelIOWam.close({ appId, name, params });
        }
        return window.ChannelIOWam.close();
    }
}

export function setSize(width, height) {
    if (typeof window.ChannelIOWam.setSize === 'function') {
        return window.ChannelIOWam.setSize({ width, height });
    }
}

export async function callFunction(appId, name, params) {
    if (typeof window.ChannelIOWam.callFunction === 'function') {
        return window.ChannelIOWam.callFunction({ appId, name, params });
    }
    return Promise.reject();
}

export async function callNativeFunction(name, params) {
    if (typeof window.ChannelIOWam.callNativeFunction === 'function') {
        return window.ChannelIOWam.callNativeFunction({ name, params });
    }
    return Promise.reject();
}

export function callCommand(appId, name, params) {
    if (typeof window.ChannelIOWam.callCommand === 'function') {
        return window.ChannelIOWam.callCommand({ appId, name, params });
    }
}